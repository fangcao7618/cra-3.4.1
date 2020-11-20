import "./index.scss";
function XiBorder() {
  return (
    <div className="XiBorder">
      <div className="sidebar">
        <ul className="folder">
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
        </ul>
        <h3>单行文本溢出。。。</h3>
        <div className="inaline">
          一些流行的库在他们的文档中使用 decorators 。 Create React
          App目前故意不支持 decorator 语法，因为：
          这是一个实验性提案，可能会发生变化（事实上，它已经改变了一次，并且会再次发生变化）。
          大多数库目前仅支持旧版本的提案 - 这绝不是标准。
        </div>
        <h3>多行文本溢出。。。</h3>
        <div className="intwoline">
          一些流行的库在他们的文档中使用 decorators 。 Create React
          App目前故意不支持 decorator 语法，因为：
          这是一个实验性提案，可能会发生变化（事实上，它已经改变了一次，并且会再次发生变化）。
          大多数库目前仅支持旧版本的提案 - 这绝不是标准。
        </div>
        <h3>单行文本溢出。。。</h3>
        <div className="inaline">
          A selector represents a piece of derived state. Derived state is a
          transformation of state. You can think of derived state as the output
          of passing state to a pure function that modifies the given state in
          some way:
        </div>
        <h3>多行文本溢出。。。</h3>
        <div className="intwoline">
          A selector represents a piece of derived state. Derived state is a
          transformation of state. You can think of derived state as the output
          of passing state to a pure function that modifies the given state in
          some way:
        </div>
      </div>
    </div>
  );
}

export default XiBorder;
