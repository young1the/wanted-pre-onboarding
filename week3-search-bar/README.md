## CacheStorage와 Debounce를 이용하여 API 최적화

## ⏰ 기간

2023.01.10 ~ 2023.01.13

## **🖥 시연**

![cover_search](https://user-images.githubusercontent.com/86599495/228400976-87835032-2c90-4a7d-a3df-d49bb67a6f01.gif)

## **⚡️ 사용 기술**

- react: 18.2.0
- styled-reset: 4.4.5
- styled-components: 5.3.6
- axios: 1.2.2
- typescript: 4.9.3

## 📖 세부구현

### 1. 입력한 텍스트와 일치하는 부분 볼드처리

유저가 검색한 값인 `value` 를 기준으로 `split()` 하여 나눈 문자열 배열을 `map()` 을 이용해서 붙이는 방법으로 볼드처리 했습니다.

### 2. API 호출 최적화

### 2-1. API 호출별로 로컬 캐싱 구현

```tsx
// in SearchWorker
async getSickInfos(query: string) {
  const Cache = new CacheStorage("sick");
  const cachedData = await Cache.match(query);
  if (cachedData) {
    return cachedData;
  }
	const params: TSickParams = { q: query };
  const requestedData = await getSickInfoByQueryString(params);
  Cache.put(query, requestedData);
  return requestedData;
}
```

`Request`와 `Response`를 쌍으로 저장할 수 있는 `CacheStroage`를 이용해서 api를 호출하기 전에 이미 같은 `Request` 에 대한 `Response` 가 있는 지 확인하고, `Request` 가 없을 때에만 `getSickInfoByQueryStrings` 를 호출해서 api요청을 보내도록 처리했습니다.

### 2-2. 입력마다 API 호출하지 않도록 API 호출 횟수를 줄이는 전략 수립 및 실행

```tsx
useEffect(() => {
    let timer: NodeJS.Timeout;
    if (!value) setSearchState("None");
    else {
      timer = setTimeout(() => {
        search(value);
      }, delay);
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [value]);
```

`<input/>`의 value 값인 `value`가 바뀔 때마다, `useEffect`가 실행되고, `value`가 빈 문자열이 아닌 경우에는 `setTimeout()` 을 이용해서 `delay`이후에 api를 호출하거나 캐싱된 결과를 받아오는 `search` 함수가 실행되도록 했고 `value`가 다시 바뀌어서 재 렌더링 될 경우에 이전에 설정된 `timer`를 `clearTimeout()` 해서 **debounce** 처리 했습니다.

### 3. 키보드만으로 추천 검색어들로 이동 가능하도록 구현

```tsx
const valueRef = useRef(value);
const [tabIndex, setTabIndex] = useState<number>(-1);
const onKeyDownHandler = useCallback(
    (ev: KeyboardEvent) => {
      if (result) {
        switch (ev.key) {
          case "ArrowDown":
            setTabIndex((prev) => 
							(prev === result?.length - 1 ? 0 : prev + 1));
            break;
          case "ArrowUp":
            setTabIndex((prev) => (prev === 0 ? -1 : prev - 1));
            break;
          case "Enter":
            alert(valueRef.current);
					// .....
        }
      }
    },
    [result, valueRef.current]
  );
```

`<SearchSection/>` 내부에 `tabIndex`라는 상태값을 두고, `<input/>`의 `onKeyDown`이벤트로 `tabIndex`값을 변경할 수 있는 함수를 넘겨주었습니다.

```tsx
result.map((ele, index) => { return
<SearchItem
	// ...props
	isFocused={index === tabIndex}
	focusValueRef={valueRef}
/> })
const SearchItem = (props) => {
	if (isFocused) focusValueRef.current = sickCd;
// ...
}
```

`<SearchItem/>` 에서 `tabIndex`와 자신의 index값이 같을 때, `isFocused`가 `true`가 되고 이 경우에 `valueRef`에 `sickCd`를 담아주어서 “Enter”키가 입력되었을 때, 해당 `sickCd`를 이용해서 `navigate()`또는 modal창을 띄워주는 등의 작업을 할 수 있도록 처리했습니다.
