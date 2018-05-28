### 开发 angular 的正确姿势

```ts
// 定义属性借口
export interface ButtonProps {
  content: string | TemplateRef;
  clickStream: EventEmitter<MouseEvent>;
}
// 定义默认属性
@Injectable()
export class ButtonDefaultProps implements ButtonProps {
  content = '点我啊';
  clickStream = new EventEmitter();
}
export abstract class ButtonAbstract implements ButtonProps {
  abstract onClick(): void;
}
export class AmButton extends ButtonAbstract implements ButtonProps {
  constructor(private _default: ButtonDefaultProps){

  }
  onClick(){
    this.clickStream.emit();
  }
}
```
