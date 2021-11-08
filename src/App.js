// react 야 Subject라는 이름의 태그를 나는 만들거야.
// 이 태그의 내용은 아래와 같아.
// 사용자 정의 태그를 만들 수 있다.
import React, { Component, useState } from "react";
//리액트 앱 0415
//property => props
class Subject extends Component {
  render() {
    return (
      <header>
        <h1>{this.props.title}</h1>
        {this.props.sub}
      </header>
    );
  }
}

// 이부분 맵으로 바꿀 수 있음 0415
//0416
//0419 test
//0420 test
//0422 test
//0424 test
//0426 test
//0427 test
//0428 test
//0429 test
//0430 test
//0502 test
//0503 test
//0504 test
//0506 test
//0507 test
//0509 test
//0510 test
//0511 test
//0513 test
//0514 test
//0515 test
//0516 test
//0517 test
//0518 test
//0519 test
//0521 test
//0522 test
//0523 test
//0524 test
//0525 test
//0526 test
//0527 test
//0528 test
//0529 test
//0530 test
//0601 test
//0602 test
//0603 test
//0604 test
//0606 test
//0607 test
//0608 test
//0609 test
//0610 test
//0611 test
//0612 test
//0613 test
//0614 test
//0615 test
//0616 test
//0617 test
//0618 test
//0619 test
//0620 test
//0621 test
//0622 test
//0624 test
//0625 test
//0626 test
//0627 test
//0629 test
//0630 test
//0702 test
//0703 test
//0704 test
//0707 test
//0708 test
//0709 test
//0711 test
//0712 test
//0713 test
//0714 test
//0715 test
//0718 test
//0720 test
//0721 test
//0723 test
//0726 test
//0727 test
//0730 test
//0802 test
//0803 test
//0804 test
//0806 test
//0808 test
//0809 test
//0810 test
//0812 test
//0816 test
//0819 test
//0822 test
//0825 test
//0827 test
//0829 test
//0830 test
//0901 test
//0902 test
//0904 test
//0906 test
//0909 test
//0912 test
//0913 test
//0916 test
//0917 test
//0918 test
//0920 test
//0923 test
//0925 test
//0927 test
//0929 test
//0930 test
//1003 test
//1005 test
//1007 test
//1008 test
//1011 test
//1013 test
//1018 test
//1019 test
//1022 test
//1024 test
//1027 test
//1030 test
//1101 test
//1105 test
//1107 test
//1108 test
class Toc extends Component {
  render() {
    let list = [];
    let i = 0;
    while (i < this.props.data.length) {
      let data = this.props.data[i];
      list.push(
        <li key={data.id}>
          {/* data.id 는 고유 식별자 */}
          <a
            href={data.id + ".html"}
            onClick={function (e) {
              e.preventDefault();
            }}
          >
            {data.title}
          </a>
        </li>
      );
      i = i + 1;
    }

    return (
      <nav>
        <ol>{list}</ol>
      </nav>
    );
  }
}

class Content extends Component {
  render() {
    return (
      <article>
        <h2>{this.props.title}</h2>
        {this.props.sub}
      </article>
    );
  }
}
class App extends Component {
  state = {
    selected_content_id: 1,
    contents: [
      { id: 1, title: "HTML", desc: "HTML is for information" },
      { id: 2, title: "CSS", desc: "CSS is for design" },
      { id: 3, title: "JavaScript", desc: "JavaScript is for interaction" },
    ],
  };

  getSelectedContent() {
    let i = 0;
    while (i < this.state.contents.length) {
      let data = this.state.contents[i];
      if (this.state.selected_content_id === data.id) {
        return data;
      }
      i = i + 1;
    }
  }

  render() {
    let content = this.getSelectedContent;
    return (
      <div className="App">
        <Subject title="WEB" sub="World wide web"></Subject>

        <Toc data={this.state.contents}></Toc>

        <Content title="Welcom" sub="Hello web"></Content>
      </div>
    );
  }
}

export default App;
