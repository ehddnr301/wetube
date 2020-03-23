## 3.9강

- `Property 'title' does not exist on type 'Document'.`
- video를 넘겨줘야하는데 type이 document라서 title이 없다고 한다.

- 해결 : `export interface IVideo extends mongoose.Document` 로 mongoose.Document를 확장해서 IVideo를 정의
- `const model = mongoose.model<IVideo & mongoose.Document>("Video", VideoSchema);` 로 IVideo와 mongoose.Document를 함께 type으로 이용

## typescript설정

- exModuleInterop
  - `Enables emit interoperability between CommonJS and ES Modules via creation of namespace objects for all imports. Implies 'allowSyntheticDefaultImports'.`
  - allowSyntheticDefaultImports 를 암시적으로 허용해야한다.
  - default export 가 없으면 `import * as` 이런식으로 써주는게 맞지만 위 두옵션을 주면 그냥 import something from "somthing" 이 가능하다.

## User mode type

- user model type을 기존의 IUser로 했을때는 passport-local-mongoose의 기능을 사용하지 못하여서 수정합니다.
- mongoose.PassportLocalSchema 이 기본적으로 존재하여서 이것으로 변경하였습니다.

## github callback 에서 받아온 profile 사용

- <https://github.com/wan2land/stdjs/blob/3638ee0141aaeed571e0c7323bb2f37216ece267/packages/oauth/src/strategies/github.ts> 에서 발견.
- interface를 따로 만들어준다.

## kakao strategy

- `passport_kakao_1.default.Strategy is not a constructor` 에러가 나서 {Strategy} 를 passport-kakao 에서 import 하였습니다.
