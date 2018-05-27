'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LoginForm = function (_React$Component) {
  _inherits(LoginForm, _React$Component);

  function LoginForm(props) {
    _classCallCheck(this, LoginForm);

    var _this = _possibleConstructorReturn(this, (LoginForm.__proto__ || Object.getPrototypeOf(LoginForm)).call(this, props));

    _this.state = {
      email: '',
      password: ''
    };
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    _this.handleEmail = _this.handleEmail.bind(_this);
    _this.handlePassword = _this.handlePassword.bind(_this);
    return _this;
  }

  _createClass(LoginForm, [{
    key: 'handleSubmit',
    value: function handleSubmit(e) {
      e.preventDefault();
      var email = this.state.email;
      var password = this.state.password;
      var closeModal = this.props.closeModal;
      var renderSuccess = this.props.renderSuccess;
      fetch('/users').then(function (response) {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' + response.status);
          return;
        }
        response.json().then(function (body) {
          return body.forEach(function (item) {
            if (item.password === password && item.email === email) {
              renderSuccess();
              document.getElementById('description').remove();
              document.getElementById('button1').remove();
              document.getElementById('button2').remove();
            }
          });
        });
      });
    }
  }, {
    key: 'handleEmail',
    value: function handleEmail(e) {
      this.setState({ email: e.target.value });
    }
  }, {
    key: 'handlePassword',
    value: function handlePassword(e) {
      this.setState({ password: e.target.value });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { style: this.props.styles },
        React.createElement(
          'form',
          { onSubmit: this.handleSubmit },
          React.createElement(
            'p',
            null,
            'Email'
          ),
          React.createElement('input', { id: 'email', type: 'text', onChange: this.handleEmail }),
          React.createElement(
            'p',
            null,
            'Password'
          ),
          React.createElement('input', { id: 'password', type: 'password', onChange: this.handlePassword }),
          React.createElement('input', { type: 'submit' })
        ),
        React.createElement('br', null),
        React.createElement(
          'p',
          { id: 'description' },
          'If you haven\'t already created an account, register below:'
        ),
        React.createElement(
          'button',
          { id: 'button1', onClick: this.props.showNext },
          'Register'
        ),
        React.createElement(
          'button',
          { id: 'button2', onClick: this.props.closeModal },
          'Return'
        )
      );
    }
  }]);

  return LoginForm;
}(React.Component);

var RegisterForm = function (_React$Component2) {
  _inherits(RegisterForm, _React$Component2);

  function RegisterForm(props) {
    _classCallCheck(this, RegisterForm);

    var _this2 = _possibleConstructorReturn(this, (RegisterForm.__proto__ || Object.getPrototypeOf(RegisterForm)).call(this, props));

    _this2.state = {};
    _this2.handleSubmit = _this2.handleSubmit.bind(_this2);
    _this2.handleFirstName = _this2.handleFirstName.bind(_this2);
    _this2.handleLastName = _this2.handleLastName.bind(_this2);
    _this2.handleEmail = _this2.handleEmail.bind(_this2);
    _this2.handlePassword = _this2.handlePassword.bind(_this2);
    return _this2;
  }

  _createClass(RegisterForm, [{
    key: 'handleSubmit',
    value: function handleSubmit(e) {
      e.preventDefault();
      var json = {
        name: this.state.firstname + ' ' + this.state.lastname,
        email: this.state.email,
        password: this.state.password
      };
      fetch('/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(json)
      });
    }
  }, {
    key: 'handleFirstName',
    value: function handleFirstName(e) {
      this.setState({ firstname: e.target.value });
    }
  }, {
    key: 'handleLastName',
    value: function handleLastName(e) {
      this.setState({ lastname: e.target.value });
    }
  }, {
    key: 'handleEmail',
    value: function handleEmail(e) {
      this.setState({ email: e.target.value });
    }
  }, {
    key: 'handlePassword',
    value: function handlePassword(e) {
      this.setState({ password: e.target.value });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'form',
        { id: 'register', style: this.props.styles, onSubmit: this.handleSubmit },
        React.createElement(
          'button',
          { onClick: this.props.showPrevious },
          'Back to Login'
        ),
        React.createElement('h5', null),
        React.createElement(
          'p',
          null,
          'Thank you for creating an account with us, please enter your name and email address and create a password.'
        ),
        React.createElement(
          'p',
          null,
          'First Name'
        ),
        React.createElement('input', { type: 'text', onChange: this.handleFirstName }),
        React.createElement(
          'p',
          null,
          'Last Name'
        ),
        React.createElement('input', { type: 'text', onChange: this.handleLastName }),
        React.createElement(
          'p',
          null,
          'Email'
        ),
        React.createElement('input', { type: 'text', onChange: this.handleEmail }),
        React.createElement(
          'p',
          null,
          'Password'
        ),
        React.createElement('input', { type: 'password', onChange: this.handlePassword }),
        React.createElement('input', { type: 'submit' })
      );
    }
  }]);

  return RegisterForm;
}(React.Component);

var App = function (_React$Component3) {
  _inherits(App, _React$Component3);

  function App(props) {
    _classCallCheck(this, App);

    var _this3 = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this3.state = {
      styles: {
        left: '-1299px'
      },
      registerFormStyles: {
        display: 'none'
      },
      loginFormStyles: {
        display: 'block'
      },
      checkmarkStyles: {
        display: 'none'
      }
    };
    _this3.beginLogin = _this3.beginLogin.bind(_this3);
    _this3.closeModal = _this3.closeModal.bind(_this3);
    _this3.next = _this3.next.bind(_this3);
    _this3.previous = _this3.previous.bind(_this3);
    _this3.renderCheckMark = _this3.renderCheckMark.bind(_this3);
    return _this3;
  }

  _createClass(App, [{
    key: 'beginLogin',
    value: function beginLogin() {
      this.setState({ styles: { left: '0', height: 'auto' } });
    }
  }, {
    key: 'renderCheckMark',
    value: function renderCheckMark() {
      this.setState({ checkmarkStyles: { display: 'block' } });
    }
  }, {
    key: 'closeModal',
    value: function closeModal() {
      this.setState({ styles: { display: 'none' } });
    }
  }, {
    key: 'next',
    value: function next() {
      this.setState({ loginFormStyles: { display: 'none' } });
      this.setState({ registerFormStyles: { display: 'block' } });
    }
  }, {
    key: 'previous',
    value: function previous(e) {
      e.preventDefault();
      this.setState({ loginFormStyles: { display: 'block' } });
      this.setState({ registerFormStyles: { display: 'none' } });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement('input', { onClick: this.beginLogin, type: 'submit', value: 'Account' }),
        React.createElement(
          'div',
          { className: 'grit', id: 'pop-up', style: this.state.styles },
          React.createElement(
            'svg',
            { style: this.state.checkmarkStyles, className: 'checkmark', xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 52 52' },
            React.createElement('circle', { className: 'checkmark__circle', cx: '26', cy: '26', r: '25', fill: 'none' }),
            React.createElement('path', { className: 'checkmark__check', stroke: '#18af09', fill: 'none', d: 'M14.1 27.2l7.1 7.2 16.7-16.8' })
          ),
          React.createElement(
            'span',
            { onClick: this.closeModal, id: 'close-pop-up' },
            '\u2715'
          ),
          React.createElement(
            'span',
            null,
            'Account'
          ),
          React.createElement(
            'h5',
            null,
            'enter your account information or register here'
          ),
          React.createElement(LoginForm, { renderSuccess: this.renderCheckMark, closeModal: this.closeModal, showNext: this.next, styles: this.state.loginFormStyles }),
          React.createElement(RegisterForm, { showPrevious: this.previous, styles: this.state.registerFormStyles })
        )
      );
    }
  }]);

  return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NsaWVudC9hcHAuanN4Il0sIm5hbWVzIjpbIkxvZ2luRm9ybSIsInByb3BzIiwic3RhdGUiLCJlbWFpbCIsInBhc3N3b3JkIiwiaGFuZGxlU3VibWl0IiwiYmluZCIsImhhbmRsZUVtYWlsIiwiaGFuZGxlUGFzc3dvcmQiLCJlIiwicHJldmVudERlZmF1bHQiLCJjbG9zZU1vZGFsIiwicmVuZGVyU3VjY2VzcyIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwic3RhdHVzIiwiY29uc29sZSIsImxvZyIsImpzb24iLCJib2R5IiwiZm9yRWFjaCIsIml0ZW0iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicmVtb3ZlIiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInN0eWxlcyIsInNob3dOZXh0IiwiUmVhY3QiLCJDb21wb25lbnQiLCJSZWdpc3RlckZvcm0iLCJoYW5kbGVGaXJzdE5hbWUiLCJoYW5kbGVMYXN0TmFtZSIsIm5hbWUiLCJmaXJzdG5hbWUiLCJsYXN0bmFtZSIsIm1ldGhvZCIsImhlYWRlcnMiLCJKU09OIiwic3RyaW5naWZ5Iiwic2hvd1ByZXZpb3VzIiwiQXBwIiwibGVmdCIsInJlZ2lzdGVyRm9ybVN0eWxlcyIsImRpc3BsYXkiLCJsb2dpbkZvcm1TdHlsZXMiLCJjaGVja21hcmtTdHlsZXMiLCJiZWdpbkxvZ2luIiwibmV4dCIsInByZXZpb3VzIiwicmVuZGVyQ2hlY2tNYXJrIiwiaGVpZ2h0IiwiUmVhY3RET00iLCJyZW5kZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsUzs7O0FBQ0oscUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxzSEFDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGFBQU8sRUFESTtBQUVYQyxnQkFBVTtBQUZDLEtBQWI7QUFJQSxVQUFLQyxZQUFMLEdBQW9CLE1BQUtBLFlBQUwsQ0FBa0JDLElBQWxCLE9BQXBCO0FBQ0EsVUFBS0MsV0FBTCxHQUFtQixNQUFL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QUcsSUFBakQsRUFBc0QsR0FBRSxJQUF4RCxFQUE2RCxNQUFLLE1BQWxFLEdBQXJIO0FBQStMLDBDQUFNLFdBQVUsa0JBQWhCLEVBQW1DLFFBQU8sU0FBMUMsRUFBb0QsTUFBSyxNQUF6RCxFQUFnRSxHQUFFLDhCQUFsRTtBQUEvTCxXQURGO0FBRUU7QUFBQTtBQUFBLGNBQU0sU0FBUyxLQUFLdEMsVUFBcEIsRUFBZ0MsSUFBRyxjQUFuQztBQUFBO0FBQUEsV0FGRjtBQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FIRjtBQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FKRjtBQUtFLDhCQUFDLFNBQUQsSUFBVyxlQUFlLEtBQUswQyxlQUEvQixFQUFnRCxZQUFZLEtBQUsxQyxVQUFqRSxFQUE2RSxVQUFVLEtBQUt3QyxJQUE1RixFQUFrRyxRQUFRLEtBQUtqRCxLQUFMLENBQVc4QyxlQUFySCxHQUxGO0FBTUUsOEJBQUMsWUFBRCxJQUFjLGNBQWMsS0FBS0ksUUFBakMsRUFBMkMsUUFBUSxLQUFLbEQsS0FBTCxDQUFXNEMsa0JBQTlEO0FBTkY7QUFGRixPQURGO0FBYUQ7Ozs7RUF2RGVmLE1BQU1DLFM7O0FBMER4QnVCLFNBQVNDLE1BQVQsQ0FBZ0Isb0JBQUMsR0FBRCxPQUFoQixFQUF5QmpDLFNBQVNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBekIiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgTG9naW5Gb3JtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZW1haWw6ICcnLFxuICAgICAgcGFzc3dvcmQ6ICcnXG4gICAgfVxuICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKVxuICAgIHRoaXMuaGFuZGxlRW1haWwgPSB0aGlzLmhhbmRsZUVtYWlsLmJpbmQodGhpcylcbiAgICB0aGlzLmhhbmRsZVBhc3N3b3JkID0gdGhpcy5oYW5kbGVQYXNzd29yZC5iaW5kKHRoaXMpXG4gIH1cbiAgaGFuZGxlU3VibWl0KGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICB2YXIgZW1haWwgPSB0aGlzLnN0YXRlLmVtYWlsXG4gICAgdmFyIHBhc3N3b3JkID0gdGhpcy5zdGF0ZS5wYXNzd29yZFxuICAgIHZhciBjbG9zZU1vZGFsID0gdGhpcy5wcm9wcy5jbG9zZU1vZGFsXG4gICAgdmFyIHJlbmRlclN1Y2Nlc3MgPSB0aGlzLnByb3BzLnJlbmRlclN1Y2Nlc3NcbiAgICBmZXRjaCgnL3VzZXJzJykudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyAhPT0gMjAwKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdMb29rcyBsaWtlIHRoZXJlIHdhcyBhIHByb2JsZW0uIFN0YXR1cyBDb2RlOiAnICsgcmVzcG9uc2Uuc3RhdHVzKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgcmVzcG9uc2UuanNvbigpLnRoZW4oYm9keSA9PiBib2R5LmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIGlmIChpdGVtLnBhc3N3b3JkID09PSBwYXNzd29yZCAmJiBpdGVtLmVtYWlsID09PSBlbWFpbCkge1xuICAgICAgICAgIHJlbmRlclN1Y2Nlc3MoKVxuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbicpLnJlbW92ZSgpXG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J1dHRvbjEnKS5yZW1vdmUoKVxuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidXR0b24yJykucmVtb3ZlKClcbiAgICAgICAgfVxuICAgICAgfSkpXG4gICAgfSlcbiAgfVxuICBoYW5kbGVFbWFpbChlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7ZW1haWw6IGUudGFyZ2V0LnZhbHVlfSlcbiAgfVxuICBoYW5kbGVQYXNzd29yZChlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7cGFzc3dvcmQ6IGUudGFyZ2V0LnZhbHVlfSlcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuKFxuICAgICAgPGRpdiBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZXN9PlxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxuICAgICAgICAgIDxwPkVtYWlsPC9wPlxuICAgICAgICAgIDxpbnB1dCBpZD1cImVtYWlsXCIgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVFbWFpbH0gLz5cbiAgICAgICAgICA8cD5QYXNzd29yZDwvcD5cbiAgICAgICAgICA8aW5wdXQgaWQ9XCJwYXNzd29yZFwiIHR5cGU9XCJwYXNzd29yZFwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVBhc3N3b3JkfSAvPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgLz5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPHAgaWQ9XCJkZXNjcmlwdGlvblwiPklmIHlvdSBoYXZlbid0IGFscmVhZHkgY3JlYXRlZCBhbiBhY2NvdW50LCByZWdpc3RlciBiZWxvdzo8L3A+XG4gICAgICAgIDxidXR0b24gaWQ9XCJidXR0b24xXCIgb25DbGljaz17dGhpcy5wcm9wcy5zaG93TmV4dH0+UmVnaXN0ZXI8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBpZD1cImJ1dHRvbjJcIiBvbkNsaWNrPXt0aGlzLnByb3BzLmNsb3NlTW9kYWx9PlJldHVybjwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmNsYXNzIFJlZ2lzdGVyRm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcblxuICAgIH1cbiAgICB0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcylcbiAgICB0aGlzLmhhbmRsZUZpcnN0TmFtZSA9IHRoaXMuaGFuZGxlRmlyc3ROYW1lLmJpbmQodGhpcylcbiAgICB0aGlzLmhhbmRsZUxhc3ROYW1lID0gdGhpcy5oYW5kbGVMYXN0TmFtZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5oYW5kbGVFbWFpbCA9IHRoaXMuaGFuZGxlRW1haWwuYmluZCh0aGlzKVxuICAgIHRoaXMuaGFuZGxlUGFzc3dvcmQgPSB0aGlzLmhhbmRsZVBhc3N3b3JkLmJpbmQodGhpcylcbiAgfVxuICBoYW5kbGVTdWJtaXQoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIHZhciBqc29uID0ge1xuICAgICAgbmFtZTogdGhpcy5zdGF0ZS5maXJzdG5hbWUgKyAnICcgKyB0aGlzLnN0YXRlLmxhc3RuYW1lLFxuICAgICAgZW1haWw6IHRoaXMuc3RhdGUuZW1haWwsXG4gICAgICBwYXNzd29yZDogdGhpcy5zdGF0ZS5wYXNzd29yZFxuICAgIH1cbiAgICBmZXRjaCgnL3VzZXJzJywge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShqc29uKVxuICAgIH0pXG4gIH1cbiAgaGFuZGxlRmlyc3ROYW1lKGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtmaXJzdG5hbWU6IGUudGFyZ2V0LnZhbHVlfSlcbiAgfVxuICBoYW5kbGVMYXN0TmFtZShlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7bGFzdG5hbWU6IGUudGFyZ2V0LnZhbHVlfSlcbiAgfVxuICBoYW5kbGVFbWFpbChlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7ZW1haWw6IGUudGFyZ2V0LnZhbHVlfSlcbiAgfVxuICBoYW5kbGVQYXNzd29yZChlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7cGFzc3dvcmQ6IGUudGFyZ2V0LnZhbHVlfSlcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxmb3JtIGlkPVwicmVnaXN0ZXJcIiBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZXN9IG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5wcm9wcy5zaG93UHJldmlvdXN9PkJhY2sgdG8gTG9naW48L2J1dHRvbj5cbiAgICAgICAgPGg1PjwvaDU+XG4gICAgICAgIDxwPlRoYW5rIHlvdSBmb3IgY3JlYXRpbmcgYW4gYWNjb3VudCB3aXRoIHVzLCBwbGVhc2UgZW50ZXIgeW91ciBuYW1lIGFuZCBlbWFpbCBhZGRyZXNzIGFuZCBjcmVhdGUgYSBwYXNzd29yZC48L3A+XG4gICAgICAgIDxwPkZpcnN0IE5hbWU8L3A+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUZpcnN0TmFtZX0vPlxuICAgICAgICA8cD5MYXN0IE5hbWU8L3A+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUxhc3ROYW1lfS8+XG4gICAgICAgIDxwPkVtYWlsPC9wPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVFbWFpbH0vPlxuICAgICAgICA8cD5QYXNzd29yZDwvcD5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVBhc3N3b3JkfS8+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgLz5cbiAgICAgIDwvZm9ybT5cbiAgICApXG4gIH1cbn1cblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc3R5bGVzOiB7XG4gICAgICAgIGxlZnQ6ICctMTI5OXB4J1xuICAgICAgfSxcbiAgICAgIHJlZ2lzdGVyRm9ybVN0eWxlczoge1xuICAgICAgICBkaXNwbGF5OiAnbm9uZSdcbiAgICAgIH0sXG4gICAgICBsb2dpbkZvcm1TdHlsZXM6IHtcbiAgICAgICAgZGlzcGxheTogJ2Jsb2NrJ1xuICAgICAgfSxcbiAgICAgIGNoZWNrbWFya1N0eWxlczoge1xuICAgICAgICBkaXNwbGF5OiAnbm9uZSdcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5iZWdpbkxvZ2luID0gdGhpcy5iZWdpbkxvZ2luLmJpbmQodGhpcylcbiAgICB0aGlzLmNsb3NlTW9kYWwgPSB0aGlzLmNsb3NlTW9kYWwuYmluZCh0aGlzKVxuICAgIHRoaXMubmV4dCA9IHRoaXMubmV4dC5iaW5kKHRoaXMpXG4gICAgdGhpcy5wcmV2aW91cyA9IHRoaXMucHJldmlvdXMuYmluZCh0aGlzKVxuICAgIHRoaXMucmVuZGVyQ2hlY2tNYXJrID0gdGhpcy5yZW5kZXJDaGVja01hcmsuYmluZCh0aGlzKVxuICB9XG4gIGJlZ2luTG9naW4oKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7c3R5bGVzOiB7bGVmdDogJzAnLCBoZWlnaHQ6ICdhdXRvJ319KVxuICB9XG4gIHJlbmRlckNoZWNrTWFyaygpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtjaGVja21hcmtTdHlsZXM6IHtkaXNwbGF5OiAnYmxvY2snfX0pXG4gIH1cbiAgY2xvc2VNb2RhbCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtzdHlsZXM6IHtkaXNwbGF5OiAnbm9uZSd9fSlcbiAgfVxuICBuZXh0KCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe2xvZ2luRm9ybVN0eWxlczoge2Rpc3BsYXk6ICdub25lJ319KVxuICAgIHRoaXMuc2V0U3RhdGUoe3JlZ2lzdGVyRm9ybVN0eWxlczoge2Rpc3BsYXk6ICdibG9jayd9fSlcbiAgfVxuICBwcmV2aW91cyhlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdGhpcy5zZXRTdGF0ZSh7bG9naW5Gb3JtU3R5bGVzOiB7ZGlzcGxheTogJ2Jsb2NrJ319KVxuICAgIHRoaXMuc2V0U3RhdGUoe3JlZ2lzdGVyRm9ybVN0eWxlczoge2Rpc3BsYXk6ICdub25lJ319KVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGlucHV0IG9uQ2xpY2s9e3RoaXMuYmVnaW5Mb2dpbn0gdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiQWNjb3VudFwiIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpdFwiIGlkPVwicG9wLXVwXCIgc3R5bGU9e3RoaXMuc3RhdGUuc3R5bGVzfT5cbiAgICAgICAgICA8c3ZnIHN0eWxlPXt0aGlzLnN0YXRlLmNoZWNrbWFya1N0eWxlc30gY2xhc3NOYW1lPVwiY2hlY2ttYXJrXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTIgNTJcIj48Y2lyY2xlIGNsYXNzTmFtZT1cImNoZWNrbWFya19fY2lyY2xlXCIgY3g9XCIyNlwiIGN5PVwiMjZcIiByPVwiMjVcIiBmaWxsPVwibm9uZVwiLz48cGF0aCBjbGFzc05hbWU9XCJjaGVja21hcmtfX2NoZWNrXCIgc3Ryb2tlPVwiIzE4YWYwOVwiIGZpbGw9XCJub25lXCIgZD1cIk0xNC4xIDI3LjJsNy4xIDcuMiAxNi43LTE2LjhcIi8+PC9zdmc+XG4gICAgICAgICAgPHNwYW4gb25DbGljaz17dGhpcy5jbG9zZU1vZGFsfSBpZD1cImNsb3NlLXBvcC11cFwiPiYjMTAwMDU7PC9zcGFuPlxuICAgICAgICAgIDxzcGFuPkFjY291bnQ8L3NwYW4+XG4gICAgICAgICAgPGg1PmVudGVyIHlvdXIgYWNjb3VudCBpbmZvcm1hdGlvbiBvciByZWdpc3RlciBoZXJlPC9oNT5cbiAgICAgICAgICA8TG9naW5Gb3JtIHJlbmRlclN1Y2Nlc3M9e3RoaXMucmVuZGVyQ2hlY2tNYXJrfSBjbG9zZU1vZGFsPXt0aGlzLmNsb3NlTW9kYWx9IHNob3dOZXh0PXt0aGlzLm5leHR9IHN0eWxlcz17dGhpcy5zdGF0ZS5sb2dpbkZvcm1TdHlsZXN9Lz5cbiAgICAgICAgICA8UmVnaXN0ZXJGb3JtIHNob3dQcmV2aW91cz17dGhpcy5wcmV2aW91c30gc3R5bGVzPXt0aGlzLnN0YXRlLnJlZ2lzdGVyRm9ybVN0eWxlc30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSlcbiJdfQ==