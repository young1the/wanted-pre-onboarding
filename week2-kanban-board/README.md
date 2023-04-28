## Drag&Drop을 직접 구현하고 React Query를 이용해 칸반보드 구현

## ⏰ 기간

2023.01.03 ~ 2023.01.06

## **🖥 시연**
![cover_kanban](https://user-images.githubusercontent.com/86599495/228400855-c5fd4409-b2fa-4778-b89e-fcf69e452a54.gif)

## **⚡️ 사용 기술**

- React
- TypeScript
- Tailwindcss
- Axios
- React Query

## 📖 세부구현

### 1. Mock Service Worker

백엔드 API 구현 전에 실제 네트워크와 크게 다르지 않게 테스트를 하기 위해서 MSW를 사용했습니다.

**1-1. 이슈 목록 순서 적용방법**

기본적으로 고유ID를 오름차순으로 정렬하고, 사용자가 변경 한 순서에 따라 목록들이 정렬 되는데, 이를 처리하기 위해서, 서버(백엔드)측에서 데이터를 다룰 때 연결리스트를 사용하면 좋겠다고 생각했습니다. 

**1-1-1. 서버**
고유ID는 이슈를 생성한 순서대로 오름차순으로 부여받는다고 가정하고, 들어오는 이슈들을 연결리스트의 뒷쪽에 추가하고 사용자가 순서를 변경하면, 해당 리스트를 위치에 삽입합니다.
그리고 클라이언트에서 get요청을 보내면 리스트의 head노드부터 순회하면서 데이터들을 배열 또는 객체에 담아서 전송합니다.

```tsx

// src/mocks/handler.js
rest.get("http://test.com/complete/", (req, res, ctx) => {
    const _array = completeList.toArray();
    return res(ctx.status(200), ctx.json(_array));
  }),
```

1-1-2. **클라이언트**

```tsx

<DragContextProvider>
	<Board>
		<Section>
			<Card />
		</Section>
		<Section />
		<Section />
	</Board>
</DragContextProvider>
```

`useRef()` 를 사용한, `DragContext : {startRef.current : {id, status}, EnterRef}`  라는 이름의 context를 전달해서,`<Card/>` 에서 `onDragStart`가 발생할 때, 해당 컴포넌트의 id와 `status : "todo" | "inProgress"`를 `start`에 담고, 다른 `<Card/>`또는 `<Section />`에서 `onDragEnter`가 발생하면, `enter` 에 담은 후, `onDragEnd` 로 drag이벤트가 종료되면, `start`와 `enter`의 객체를 put 요청의 body에 담아서 서버측에 전달했습니다.

1-1-3. **서버**
서버측에서 put요청을 받았을 때, `start.status` 와 같은 연결리스트에서  `start.id` 를 조회해서, `enter.status` 의 연결리스트에 있는 `enter.id`를 가진 노드를 찾아내서 앞 쪽에 연결 해주었습니다.

```tsx
// const TodoList = new LinkedList("Todo")
a => b => enterNode => c
a => b => startNode => enterNode => c
```

상태가 변경되었을 때는 startNode를 삭제하고 변경된 상태의 연결리스트에 연결했습니다.

**1-2. 회고**

그러나, 값을 통해 Node에 접근할 때, 연결리스트의 값들을 배열로 변경할 때 O(N)의 시간복잡도가 발생하고, 특히 삽입하는 과정에서 startNode와 enterNode를 찾아야 하기 때문에 최악의 경우 O(N^2)의 시간 복잡도가 발생하기 때문에 아쉬웠습니다.
