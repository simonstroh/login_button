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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NsaWVudC9hcHAuanN4Il0sIm5hbWVzIjpbIkxvZ2luRm9ybSIsInByb3BzIiwic3RhdGUiLCJlbWFpbCIsInBhc3N3b3JkIiwiaGFuZGxlU3VibWl0IiwiYmluZCIsImhhbmRsZUVtYWlsIiwiaGFuZGxlUGFzc3dvcmQiLCJlIiwicHJldmVudERlZmF1bHQiLCJjbG9zZU1vZGFsIiwicmVuZGVyU3VjY2VzcyIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwic3RhdHVzIiwiY29uc29sZSIsImxvZyIsImpzb24iLCJib2R5IiwiZm9yRWFjaCIsIml0ZW0iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicmVtb3ZlIiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInN0eWxlcyIsInNob3dOZXh0IiwiUmVhY3QiLCJDb21wb25lbnQiLCJSZWdpc3RlckZvcm0iLCJoYW5kbGVGaXJzdE5hbWUiLCJoYW5kbGVMYXN0TmFtZSIsIm5hbWUiLCJmaXJzdG5hbWUiLCJsYXN0bmFtZSIsIm1ldGhvZCIsImhlYWRlcnMiLCJKU09OIiwic3RyaW5naWZ5Iiwic2hvd1ByZXZpb3VzIiwiQXBwIiwibGVmdCIsInJlZ2lzdGVyRm9ybVN0eWxlcyIsImRpc3BsYXkiLCJsb2dpbkZvcm1TdHlsZXMiLCJjaGVja21hcmtTdHlsZXMiLCJiZWdpbkxvZ2luIiwibmV4dCIsInByZXZpb3VzIiwicmVuZGVyQ2hlY2tNYXJrIiwiaGVpZ2h0IiwiUmVhY3RET00iLCJyZW5kZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsUzs7O0FBQ0oscUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxzSEFDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGFBQU8sRUFESTtBQUVYQyxnQkFBVTtBQUZDLEtBQWI7QUFJQSxVQUFLQyxZQUFMLEdBQW9CLE1BQUtBLFlBQUwsQ0FBa0JDLElBQWxCLE9BQXBCO0FBQ0EsVUFBS0MsV0FBTCxHQUFtQixNQUFL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QUFFLElBQXhELEVBQTZELE1BQUssTUFBbEUsR0FBckg7QUFBK0wsMENBQU0sV0FBVSxrQkFBaEIsRUFBbUMsUUFBTyxTQUExQyxFQUFvRCxNQUFLLE1BQXpELEVBQWdFLEdBQUUsOEJBQWxFO0FBQS9MLFdBREY7QUFFRTtBQUFBO0FBQUEsY0FBTSxTQUFTLEtBQUt0QyxVQUFwQixFQUFnQyxJQUFHLGNBQW5DO0FBQUE7QUFBQSxXQUZGO0FBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUhGO0FBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUpGO0FBS0UsOEJBQUMsU0FBRCxJQUFXLGVBQWUsS0FBSzBDLGVBQS9CLEVBQWdELFlBQVksS0FBSzFDLFVBQWpFLEVBQTZFLFVBQVUsS0FBS3dDLElBQTVGLEVBQWtHLFFBQVEsS0FBS2pELEtBQUwsQ0FBVzhDLGVBQXJILEdBTEY7QUFNRSw4QkFBQyxZQUFELElBQWMsY0FBYyxLQUFLSSxRQUFqQyxFQUEyQyxRQUFRLEtBQUtsRCxLQUFMLENBQVc0QyxrQkFBOUQ7QUFORjtBQUZGLE9BREY7QUFhRDs7OztFQXZEZWYsTUFBTUMsUzs7QUEwRHhCdUIsU0FBU0MsTUFBVCxDQUFnQixvQkFBQyxHQUFELE9BQWhCLEVBQXlCakMsU0FBU0MsY0FBVCxDQUF3QixLQUF4QixDQUF6QiIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBMb2dpbkZvcm0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBlbWFpbDogJycsXG4gICAgICBwYXNzd29yZDogJydcbiAgICB9XG4gICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpXG4gICAgdGhpcy5oYW5kbGVFbWFpbCA9IHRoaXMuaGFuZGxlRW1haWwuYmluZCh0aGlzKVxuICAgIHRoaXMuaGFuZGxlUGFzc3dvcmQgPSB0aGlzLmhhbmRsZVBhc3N3b3JkLmJpbmQodGhpcylcbiAgfVxuICBoYW5kbGVTdWJtaXQoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIHZhciBlbWFpbCA9IHRoaXMuc3RhdGUuZW1haWxcbiAgICB2YXIgcGFzc3dvcmQgPSB0aGlzLnN0YXRlLnBhc3N3b3JkXG4gICAgdmFyIGNsb3NlTW9kYWwgPSB0aGlzLnByb3BzLmNsb3NlTW9kYWxcbiAgICB2YXIgcmVuZGVyU3VjY2VzcyA9IHRoaXMucHJvcHMucmVuZGVyU3VjY2Vzc1xuICAgIGZldGNoKCcvdXNlcnMnKS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzICE9PSAyMDApIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0xvb2tzIGxpa2UgdGhlcmUgd2FzIGEgcHJvYmxlbS4gU3RhdHVzIENvZGU6ICcgKyByZXNwb25zZS5zdGF0dXMpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICByZXNwb25zZS5qc29uKCkudGhlbihib2R5ID0+IGJvZHkuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgaWYgKGl0ZW0ucGFzc3dvcmQgPT09IHBhc3N3b3JkICYmIGl0ZW0uZW1haWwgPT09IGVtYWlsKSB7XG4gICAgICAgICAgcmVuZGVyU3VjY2VzcygpXG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uJykucmVtb3ZlKClcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnV0dG9uMScpLnJlbW92ZSgpXG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J1dHRvbjInKS5yZW1vdmUoKVxuICAgICAgICB9XG4gICAgICB9KSlcbiAgICB9KVxuICB9XG4gIGhhbmRsZUVtYWlsKGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtlbWFpbDogZS50YXJnZXQudmFsdWV9KVxuICB9XG4gIGhhbmRsZVBhc3N3b3JkKGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtwYXNzd29yZDogZS50YXJnZXQudmFsdWV9KVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4oXG4gICAgICA8ZGl2IHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlc30+XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgPHA+RW1haWw8L3A+XG4gICAgICAgICAgPGlucHV0IGlkPVwiZW1haWxcIiB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUVtYWlsfSAvPlxuICAgICAgICAgIDxwPlBhc3N3b3JkPC9wPlxuICAgICAgICAgIDxpbnB1dCBpZD1cInBhc3N3b3JkXCIgdHlwZT1cInBhc3N3b3JkXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlUGFzc3dvcmR9IC8+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiAvPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8cCBpZD1cImRlc2NyaXB0aW9uXCI+SWYgeW91IGhhdmVuJ3QgYWxyZWFkeSBjcmVhdGVkIGFuIGFjY291bnQsIHJlZ2lzdGVyIGJlbG93OjwvcD5cbiAgICAgICAgPGJ1dHRvbiBpZD1cImJ1dHRvbjFcIiBvbkNsaWNrPXt0aGlzLnByb3BzLnNob3dOZXh0fT5SZWdpc3RlcjwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGlkPVwiYnV0dG9uMlwiIG9uQ2xpY2s9e3RoaXMucHJvcHMuY2xvc2VNb2RhbH0+UmV0dXJuPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuY2xhc3MgUmVnaXN0ZXJGb3JtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuXG4gICAgfVxuICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKVxuICAgIHRoaXMuaGFuZGxlRmlyc3ROYW1lID0gdGhpcy5oYW5kbGVGaXJzdE5hbWUuYmluZCh0aGlzKVxuICAgIHRoaXMuaGFuZGxlTGFzdE5hbWUgPSB0aGlzLmhhbmRsZUxhc3ROYW1lLmJpbmQodGhpcylcbiAgICB0aGlzLmhhbmRsZUVtYWlsID0gdGhpcy5oYW5kbGVFbWFpbC5iaW5kKHRoaXMpXG4gICAgdGhpcy5oYW5kbGVQYXNzd29yZCA9IHRoaXMuaGFuZGxlUGFzc3dvcmQuYmluZCh0aGlzKVxuICB9XG4gIGhhbmRsZVN1Ym1pdChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdmFyIGpzb24gPSB7XG4gICAgICBuYW1lOiB0aGlzLnN0YXRlLmZpcnN0bmFtZSArICcgJyArIHRoaXMuc3RhdGUubGFzdG5hbWUsXG4gICAgICBlbWFpbDogdGhpcy5zdGF0ZS5lbWFpbCxcbiAgICAgIHBhc3N3b3JkOiB0aGlzLnN0YXRlLnBhc3N3b3JkXG4gICAgfVxuICAgIGZldGNoKCcvdXNlcnMnLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGpzb24pXG4gICAgfSlcbiAgfVxuICBoYW5kbGVGaXJzdE5hbWUoZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoe2ZpcnN0bmFtZTogZS50YXJnZXQudmFsdWV9KVxuICB9XG4gIGhhbmRsZUxhc3ROYW1lKGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtsYXN0bmFtZTogZS50YXJnZXQudmFsdWV9KVxuICB9XG4gIGhhbmRsZUVtYWlsKGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtlbWFpbDogZS50YXJnZXQudmFsdWV9KVxuICB9XG4gIGhhbmRsZVBhc3N3b3JkKGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtwYXNzd29yZDogZS50YXJnZXQudmFsdWV9KVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGZvcm0gc3R5bGU9e3RoaXMucHJvcHMuc3R5bGVzfSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMucHJvcHMuc2hvd1ByZXZpb3VzfT5CYWNrIHRvIExvZ2luPC9idXR0b24+XG4gICAgICAgIDxoNT48L2g1PlxuICAgICAgICA8cD5UaGFuayB5b3UgZm9yIGNyZWF0aW5nIGFuIGFjY291bnQgd2l0aCB1cywgcGxlYXNlIGVudGVyIHlvdXIgbmFtZSBhbmQgZW1haWwgYWRkcmVzcyBhbmQgY3JlYXRlIGEgcGFzc3dvcmQuPC9wPlxuICAgICAgICA8cD5GaXJzdCBOYW1lPC9wPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVGaXJzdE5hbWV9Lz5cbiAgICAgICAgPHA+TGFzdCBOYW1lPC9wPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVMYXN0TmFtZX0vPlxuICAgICAgICA8cD5FbWFpbDwvcD5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlRW1haWx9Lz5cbiAgICAgICAgPHA+UGFzc3dvcmQ8L3A+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVQYXNzd29yZH0vPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIC8+XG4gICAgICA8L2Zvcm0+XG4gICAgKVxuICB9XG59XG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHN0eWxlczoge1xuICAgICAgICBsZWZ0OiAnLTEyOTlweCdcbiAgICAgIH0sXG4gICAgICByZWdpc3RlckZvcm1TdHlsZXM6IHtcbiAgICAgICAgZGlzcGxheTogJ25vbmUnXG4gICAgICB9LFxuICAgICAgbG9naW5Gb3JtU3R5bGVzOiB7XG4gICAgICAgIGRpc3BsYXk6ICdibG9jaydcbiAgICAgIH0sXG4gICAgICBjaGVja21hcmtTdHlsZXM6IHtcbiAgICAgICAgZGlzcGxheTogJ25vbmUnXG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuYmVnaW5Mb2dpbiA9IHRoaXMuYmVnaW5Mb2dpbi5iaW5kKHRoaXMpXG4gICAgdGhpcy5jbG9zZU1vZGFsID0gdGhpcy5jbG9zZU1vZGFsLmJpbmQodGhpcylcbiAgICB0aGlzLm5leHQgPSB0aGlzLm5leHQuYmluZCh0aGlzKVxuICAgIHRoaXMucHJldmlvdXMgPSB0aGlzLnByZXZpb3VzLmJpbmQodGhpcylcbiAgICB0aGlzLnJlbmRlckNoZWNrTWFyayA9IHRoaXMucmVuZGVyQ2hlY2tNYXJrLmJpbmQodGhpcylcbiAgfVxuICBiZWdpbkxvZ2luKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe3N0eWxlczoge2xlZnQ6ICcwJywgaGVpZ2h0OiAnYXV0byd9fSlcbiAgfVxuICByZW5kZXJDaGVja01hcmsoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7Y2hlY2ttYXJrU3R5bGVzOiB7ZGlzcGxheTogJ2Jsb2NrJ319KVxuICB9XG4gIGNsb3NlTW9kYWwoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7c3R5bGVzOiB7ZGlzcGxheTogJ25vbmUnfX0pXG4gIH1cbiAgbmV4dCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtsb2dpbkZvcm1TdHlsZXM6IHtkaXNwbGF5OiAnbm9uZSd9fSlcbiAgICB0aGlzLnNldFN0YXRlKHtyZWdpc3RlckZvcm1TdHlsZXM6IHtkaXNwbGF5OiAnYmxvY2snfX0pXG4gIH1cbiAgcHJldmlvdXMoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIHRoaXMuc2V0U3RhdGUoe2xvZ2luRm9ybVN0eWxlczoge2Rpc3BsYXk6ICdibG9jayd9fSlcbiAgICB0aGlzLnNldFN0YXRlKHtyZWdpc3RlckZvcm1TdHlsZXM6IHtkaXNwbGF5OiAnbm9uZSd9fSlcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxpbnB1dCBvbkNsaWNrPXt0aGlzLmJlZ2luTG9naW59IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIkFjY291bnRcIiAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaXRcIiBpZD1cInBvcC11cFwiIHN0eWxlPXt0aGlzLnN0YXRlLnN0eWxlc30+XG4gICAgICAgICAgPHN2ZyBzdHlsZT17dGhpcy5zdGF0ZS5jaGVja21hcmtTdHlsZXN9IGNsYXNzTmFtZT1cImNoZWNrbWFya1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUyIDUyXCI+PGNpcmNsZSBjbGFzc05hbWU9XCJjaGVja21hcmtfX2NpcmNsZVwiIGN4PVwiMjZcIiBjeT1cIjI2XCIgcj1cIjI1XCIgZmlsbD1cIm5vbmVcIi8+PHBhdGggY2xhc3NOYW1lPVwiY2hlY2ttYXJrX19jaGVja1wiIHN0cm9rZT1cIiMxOGFmMDlcIiBmaWxsPVwibm9uZVwiIGQ9XCJNMTQuMSAyNy4ybDcuMSA3LjIgMTYuNy0xNi44XCIvPjwvc3ZnPlxuICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9e3RoaXMuY2xvc2VNb2RhbH0gaWQ9XCJjbG9zZS1wb3AtdXBcIj4mIzEwMDA1Ozwvc3Bhbj5cbiAgICAgICAgICA8c3Bhbj5BY2NvdW50PC9zcGFuPlxuICAgICAgICAgIDxoNT5lbnRlciB5b3VyIGFjY291bnQgaW5mb3JtYXRpb24gb3IgcmVnaXN0ZXIgaGVyZTwvaDU+XG4gICAgICAgICAgPExvZ2luRm9ybSByZW5kZXJTdWNjZXNzPXt0aGlzLnJlbmRlckNoZWNrTWFya30gY2xvc2VNb2RhbD17dGhpcy5jbG9zZU1vZGFsfSBzaG93TmV4dD17dGhpcy5uZXh0fSBzdHlsZXM9e3RoaXMuc3RhdGUubG9naW5Gb3JtU3R5bGVzfS8+XG4gICAgICAgICAgPFJlZ2lzdGVyRm9ybSBzaG93UHJldmlvdXM9e3RoaXMucHJldmlvdXN9IHN0eWxlcz17dGhpcy5zdGF0ZS5yZWdpc3RlckZvcm1TdHlsZXN9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpXG4iXX0=