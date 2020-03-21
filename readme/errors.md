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
