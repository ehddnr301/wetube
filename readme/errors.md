## 3.9강

- `Property 'title' does not exist on type 'Document'.`
- video를 넘겨줘야하는데 type이 document라서 title이 없다고 한다.

- 해결 : `export interface IVideo extends mongoose.Document` 로 mongoose.Document를 확장해서 IVideo를 정의
- `const model = mongoose.model<IVideo & mongoose.Document>("Video", VideoSchema);` 로 IVideo와 mongoose.Document를 함께 type으로 이용
