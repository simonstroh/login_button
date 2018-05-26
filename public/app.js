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
      fetch('/users').then(function (response) {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' + response.status);
          return;
        }
        response.json().then(function (body) {
          return body.forEach(function (item) {
            if (item.password === password && item.email === email) {
              closeModal();
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
          null,
          'If you haven\'t already created an account, register below:'
        ),
        React.createElement(
          'button',
          { onClick: this.props.showNext },
          'Register'
        ),
        React.createElement(
          'button',
          { onClick: this.props.closeModal },
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
      console.log(json);
      fetch('/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(json)
      });
      e.target.style.display = 'none';
      this.props.showNext();
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
        { style: this.props.styles, onSubmit: this.handleSubmit },
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
        left: '-999px'
      },
      registerFormStyles: {
        display: 'none'
      },
      loginFormStyles: {
        display: 'block'
      }
    };
    _this3.beginLogin = _this3.beginLogin.bind(_this3);
    _this3.closeModal = _this3.closeModal.bind(_this3);
    _this3.next = _this3.next.bind(_this3);
    _this3.next2 = _this3.next2.bind(_this3);
    _this3.previous = _this3.previous.bind(_this3);
    return _this3;
  }

  _createClass(App, [{
    key: 'beginLogin',
    value: function beginLogin() {
      this.setState({ styles: { left: '0', height: 'auto' } });
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
    key: 'next2',
    value: function next2() {}
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
          React.createElement(LoginForm, { closeModal: this.closeModal, showNext: this.next, styles: this.state.loginFormStyles }),
          React.createElement(RegisterForm, { showNext: this.next2, showPrevious: this.previous, styles: this.state.registerFormStyles })
        )
      );
    }
  }]);

  return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NsaWVudC9hcHAuanN4Il0sIm5hbWVzIjpbIkxvZ2luRm9ybSIsInByb3BzIiwic3RhdGUiLCJlbWFpbCIsInBhc3N3b3JkIiwiaGFuZGxlU3VibWl0IiwiYmluZCIsImhhbmRsZUVtYWlsIiwiaGFuZGxlUGFzc3dvcmQiLCJlIiwicHJldmVudERlZmF1bHQiLCJjbG9zZU1vZGFsIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJjb25zb2xlIiwibG9nIiwianNvbiIsImJvZHkiLCJmb3JFYWNoIiwiaXRlbSIsInNldFN0YXRlIiwidGFyZ2V0IiwidmFsdWUiLCJzdHlsZXMiLCJzaG93TmV4dCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiUmVnaXN0ZXJGb3JtIiwiaGFuZGxlRmlyc3ROYW1lIiwiaGFuZGxlTGFzdE5hbWUiLCJuYW1lIiwiZmlyc3RuYW1lIiwibGFzdG5hbWUiLCJtZXRob2QiLCJoZWFkZXJzIiwiSlNPTiIsInN0cmluZ2lmeSIsInN0eWxlIiwiZGlzcGxheSIsInNob3dQcmV2aW91cyIsIkFwcCIsImxlZnQiLCJyZWdpc3RlckZvcm1TdHlsZXMiLCJsb2dpbkZvcm1TdHlsZXMiLCJiZWdpbkxvZ2luIiwibmV4dCIsIm5leHQyIiwicHJldmlvdXMiLCJoZWlnaHQiLCJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsUzs7O0FBQ0oscUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxzSEFDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGFBQU8sRUFESTtBQUVYQyxnQkFBVTtBQUZDLEtBQWI7QUFJQSxVQUFLQyxZQUFMLEdBQW9CLE1BQUtBLFlBQUwsQ0FBa0JDLElBQWxCLE9BQXBCO0FBQ0EsVUFBS0MsV0FBTCxHQUFtQixNQUFLQSxXQUFMLENBQWlCRCxJQUFqQixPQUFuQjtBQUNBLFVBQUtFLGNBQUwsR0FB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Q0FBekIiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgTG9naW5Gb3JtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZW1haWw6ICcnLFxuICAgICAgcGFzc3dvcmQ6ICcnXG4gICAgfVxuICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKVxuICAgIHRoaXMuaGFuZGxlRW1haWwgPSB0aGlzLmhhbmRsZUVtYWlsLmJpbmQodGhpcylcbiAgICB0aGlzLmhhbmRsZVBhc3N3b3JkID0gdGhpcy5oYW5kbGVQYXNzd29yZC5iaW5kKHRoaXMpXG4gIH1cbiAgaGFuZGxlU3VibWl0KGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICB2YXIgZW1haWwgPSB0aGlzLnN0YXRlLmVtYWlsXG4gICAgdmFyIHBhc3N3b3JkID0gdGhpcy5zdGF0ZS5wYXNzd29yZFxuICAgIHZhciBjbG9zZU1vZGFsID0gdGhpcy5wcm9wcy5jbG9zZU1vZGFsXG4gICAgZmV0Y2goJy91c2VycycpLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgIT09IDIwMCkge1xuICAgICAgICBjb25zb2xlLmxvZygnTG9va3MgbGlrZSB0aGVyZSB3YXMgYSBwcm9ibGVtLiBTdGF0dXMgQ29kZTogJyArIHJlc3BvbnNlLnN0YXR1cyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHJlc3BvbnNlLmpzb24oKS50aGVuKGJvZHkgPT4gYm9keS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBpZiAoaXRlbS5wYXNzd29yZCA9PT0gcGFzc3dvcmQgJiYgaXRlbS5lbWFpbCA9PT0gZW1haWwpIHtcbiAgICAgICAgICBjbG9zZU1vZGFsKClcbiAgICAgICAgfVxuICAgICAgfSkpXG4gICAgfSlcbiAgfVxuICBoYW5kbGVFbWFpbChlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7ZW1haWw6IGUudGFyZ2V0LnZhbHVlfSlcbiAgfVxuICBoYW5kbGVQYXNzd29yZChlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7cGFzc3dvcmQ6IGUudGFyZ2V0LnZhbHVlfSlcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuKFxuICAgICAgPGRpdiBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZXN9PlxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxuICAgICAgICAgIDxwPkVtYWlsPC9wPlxuICAgICAgICAgIDxpbnB1dCBpZD1cImVtYWlsXCIgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVFbWFpbH0gLz5cbiAgICAgICAgICA8cD5QYXNzd29yZDwvcD5cbiAgICAgICAgICA8aW5wdXQgaWQ9XCJwYXNzd29yZFwiIHR5cGU9XCJwYXNzd29yZFwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVBhc3N3b3JkfSAvPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgLz5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPHA+SWYgeW91IGhhdmVuJ3QgYWxyZWFkeSBjcmVhdGVkIGFuIGFjY291bnQsIHJlZ2lzdGVyIGJlbG93OjwvcD5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnByb3BzLnNob3dOZXh0fT5SZWdpc3RlcjwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMucHJvcHMuY2xvc2VNb2RhbH0+UmV0dXJuPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuY2xhc3MgUmVnaXN0ZXJGb3JtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuXG4gICAgfVxuICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKVxuICAgIHRoaXMuaGFuZGxlRmlyc3ROYW1lID0gdGhpcy5oYW5kbGVGaXJzdE5hbWUuYmluZCh0aGlzKVxuICAgIHRoaXMuaGFuZGxlTGFzdE5hbWUgPSB0aGlzLmhhbmRsZUxhc3ROYW1lLmJpbmQodGhpcylcbiAgICB0aGlzLmhhbmRsZUVtYWlsID0gdGhpcy5oYW5kbGVFbWFpbC5iaW5kKHRoaXMpXG4gICAgdGhpcy5oYW5kbGVQYXNzd29yZCA9IHRoaXMuaGFuZGxlUGFzc3dvcmQuYmluZCh0aGlzKVxuICB9XG4gIGhhbmRsZVN1Ym1pdChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdmFyIGpzb24gPSB7XG4gICAgICBuYW1lOiB0aGlzLnN0YXRlLmZpcnN0bmFtZSArICcgJyArIHRoaXMuc3RhdGUubGFzdG5hbWUsXG4gICAgICBlbWFpbDogdGhpcy5zdGF0ZS5lbWFpbCxcbiAgICAgIHBhc3N3b3JkOiB0aGlzLnN0YXRlLnBhc3N3b3JkXG4gICAgfVxuICAgIGNvbnNvbGUubG9nKGpzb24pXG4gICAgZmV0Y2goJy91c2VycycsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoanNvbilcbiAgICB9KVxuICAgIGUudGFyZ2V0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICB0aGlzLnByb3BzLnNob3dOZXh0KClcbiAgfVxuICBoYW5kbGVGaXJzdE5hbWUoZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoe2ZpcnN0bmFtZTogZS50YXJnZXQudmFsdWV9KVxuICB9XG4gIGhhbmRsZUxhc3ROYW1lKGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtsYXN0bmFtZTogZS50YXJnZXQudmFsdWV9KVxuICB9XG4gIGhhbmRsZUVtYWlsKGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtlbWFpbDogZS50YXJnZXQudmFsdWV9KVxuICB9XG4gIGhhbmRsZVBhc3N3b3JkKGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtwYXNzd29yZDogZS50YXJnZXQudmFsdWV9KVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGZvcm0gc3R5bGU9e3RoaXMucHJvcHMuc3R5bGVzfSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMucHJvcHMuc2hvd1ByZXZpb3VzfT5CYWNrIHRvIExvZ2luPC9idXR0b24+XG4gICAgICAgIDxoNT48L2g1PlxuICAgICAgICA8cD5UaGFuayB5b3UgZm9yIGNyZWF0aW5nIGFuIGFjY291bnQgd2l0aCB1cywgcGxlYXNlIGVudGVyIHlvdXIgbmFtZSBhbmQgZW1haWwgYWRkcmVzcyBhbmQgY3JlYXRlIGEgcGFzc3dvcmQuPC9wPlxuICAgICAgICA8cD5GaXJzdCBOYW1lPC9wPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVGaXJzdE5hbWV9Lz5cbiAgICAgICAgPHA+TGFzdCBOYW1lPC9wPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVMYXN0TmFtZX0vPlxuICAgICAgICA8cD5FbWFpbDwvcD5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlRW1haWx9Lz5cbiAgICAgICAgPHA+UGFzc3dvcmQ8L3A+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVQYXNzd29yZH0vPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIC8+XG4gICAgICA8L2Zvcm0+XG4gICAgKVxuICB9XG59XG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHN0eWxlczoge1xuICAgICAgICBsZWZ0OiAnLTk5OXB4J1xuICAgICAgfSxcbiAgICAgIHJlZ2lzdGVyRm9ybVN0eWxlczoge1xuICAgICAgICBkaXNwbGF5OiAnbm9uZSdcbiAgICAgIH0sXG4gICAgICBsb2dpbkZvcm1TdHlsZXM6IHtcbiAgICAgICAgZGlzcGxheTogJ2Jsb2NrJ1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmJlZ2luTG9naW4gPSB0aGlzLmJlZ2luTG9naW4uYmluZCh0aGlzKVxuICAgIHRoaXMuY2xvc2VNb2RhbCA9IHRoaXMuY2xvc2VNb2RhbC5iaW5kKHRoaXMpXG4gICAgdGhpcy5uZXh0ID0gdGhpcy5uZXh0LmJpbmQodGhpcylcbiAgICB0aGlzLm5leHQyID0gdGhpcy5uZXh0Mi5iaW5kKHRoaXMpXG4gICAgdGhpcy5wcmV2aW91cyA9IHRoaXMucHJldmlvdXMuYmluZCh0aGlzKVxuICB9XG4gIGJlZ2luTG9naW4oKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7c3R5bGVzOiB7bGVmdDogJzAnLCBoZWlnaHQ6ICdhdXRvJ319KVxuICB9XG4gIGNsb3NlTW9kYWwoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7c3R5bGVzOiB7ZGlzcGxheTogJ25vbmUnfX0pXG4gIH1cbiAgbmV4dCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtsb2dpbkZvcm1TdHlsZXM6IHtkaXNwbGF5OiAnbm9uZSd9fSlcbiAgICB0aGlzLnNldFN0YXRlKHtyZWdpc3RlckZvcm1TdHlsZXM6IHtkaXNwbGF5OiAnYmxvY2snfX0pXG4gIH1cbiAgbmV4dDIoKSB7XG5cbiAgfVxuICBwcmV2aW91cyhlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdGhpcy5zZXRTdGF0ZSh7bG9naW5Gb3JtU3R5bGVzOiB7ZGlzcGxheTogJ2Jsb2NrJ319KVxuICAgIHRoaXMuc2V0U3RhdGUoe3JlZ2lzdGVyRm9ybVN0eWxlczoge2Rpc3BsYXk6ICdub25lJ319KVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGlucHV0IG9uQ2xpY2s9e3RoaXMuYmVnaW5Mb2dpbn0gdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiQWNjb3VudFwiIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpdFwiIGlkPVwicG9wLXVwXCIgc3R5bGU9e3RoaXMuc3RhdGUuc3R5bGVzfT5cbiAgICAgICAgICA8c3BhbiBvbkNsaWNrPXt0aGlzLmNsb3NlTW9kYWx9IGlkPVwiY2xvc2UtcG9wLXVwXCI+JiMxMDAwNTs8L3NwYW4+XG4gICAgICAgICAgPHNwYW4+QWNjb3VudDwvc3Bhbj5cbiAgICAgICAgICA8aDU+ZW50ZXIgeW91ciBhY2NvdW50IGluZm9ybWF0aW9uIG9yIHJlZ2lzdGVyIGhlcmU8L2g1PlxuICAgICAgICAgIDxMb2dpbkZvcm0gY2xvc2VNb2RhbD17dGhpcy5jbG9zZU1vZGFsfSBzaG93TmV4dD17dGhpcy5uZXh0fSBzdHlsZXM9e3RoaXMuc3RhdGUubG9naW5Gb3JtU3R5bGVzfS8+XG4gICAgICAgICAgPFJlZ2lzdGVyRm9ybSBzaG93TmV4dD17dGhpcy5uZXh0Mn0gc2hvd1ByZXZpb3VzPXt0aGlzLnByZXZpb3VzfSBzdHlsZXM9e3RoaXMuc3RhdGUucmVnaXN0ZXJGb3JtU3R5bGVzfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKVxuIl19