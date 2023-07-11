import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // 에러가 발생하면 에러 상태를 업데이트합니다.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // 에러를 기록하거나 추가적인 작업을 수행할 수 있습니다.
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // 에러가 발생했을 때 보여줄 화면을 구성합니다.
      return (
        <div>
          <h1>Oops! Something went wrong.</h1>
          <p>We apologize for the inconvenience. Please try again later.</p>
        </div>
      );
    }

    // 에러가 발생하지 않았을 때는 자식 컴포넌트를 그대로 렌더링합니다.
    return this.props.children;
  }
}

export default ErrorBoundary;