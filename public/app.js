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
          React.createElement(RegisterForm, { showPrevious: this.previous, styles: this.state.registerFormStyles })
        )
      );
    }
  }]);

  return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NsaWVudC9hcHAuanN4Il0sIm5hbWVzIjpbIkxvZ2luRm9ybSIsInByb3BzIiwic3RhdGUiLCJlbWFpbCIsInBhc3N3b3JkIiwiaGFuZGxlU3VibWl0IiwiYmluZCIsImhhbmRsZUVtYWlsIiwiaGFuZGxlUGFzc3dvcmQiLCJlIiwicHJldmVudERlZmF1bHQiLCJjbG9zZU1vZGFsIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJjb25zb2xlIiwibG9nIiwianNvbiIsImJvZHkiLCJmb3JFYWNoIiwiaXRlbSIsInNldFN0YXRlIiwidGFyZ2V0IiwidmFsdWUiLCJzdHlsZXMiLCJzaG93TmV4dCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiUmVnaXN0ZXJGb3JtIiwiaGFuZGxlRmlyc3ROYW1lIiwiaGFuZGxlTGFzdE5hbWUiLCJuYW1lIiwiZmlyc3RuYW1lIiwibGFzdG5hbWUiLCJtZXRob2QiLCJoZWFkZXJzIiwiSlNPTiIsInN0cmluZ2lmeSIsInNob3dQcmV2aW91cyIsIkFwcCIsImxlZnQiLCJyZWdpc3RlckZvcm1TdHlsZXMiLCJkaXNwbGF5IiwibG9naW5Gb3JtU3R5bGVzIiwiYmVnaW5Mb2dpbiIsIm5leHQiLCJwcmV2aW91cyIsImhlaWdodCIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxTOzs7QUFDSixxQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLHNIQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsYUFBTyxFQURJO0FBRVhDLGdCQUFVO0FBRkMsS0FBYjtBQUlBLFVBQUtDLFlBQUwsR0FBb0IsTUFBS0EsWUFBTCxDQUFrQkMsSUFBbEIsT0FBcEI7QUFDQSxVQUFLQyxXQUFMLEdBQW1CLE1BQUtBLFdBQUwsQ0FBaUJELElBQWpCLE9BQW5CO0FBQ0EsVUFBS0UsY0FBTCxHQUFzQixNQUFLQSxjQUFMLENB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UUFBTCxDQUFjLEVBQUNzQixpQkFBaUIsRUFBQ0QsU0FBUyxPQUFWLEVBQWxCLEVBQWQ7QUFDQSxXQUFLckIsUUFBTCxDQUFjLEVBQUNvQixvQkFBb0IsRUFBQ0MsU0FBUyxNQUFWLEVBQXJCLEVBQWQ7QUFDRDs7OzZCQUNRO0FBQ1AsYUFDRTtBQUFBO0FBQUE7QUFDRSx1Q0FBTyxTQUFTLEtBQUtFLFVBQXJCLEVBQWlDLE1BQUssUUFBdEMsRUFBK0MsT0FBTSxTQUFyRCxHQURGO0FBRUU7QUFBQTtBQUFBLFlBQUssV0FBVSxNQUFmLEVBQXNCLElBQUcsUUFBekIsRUFBa0MsT0FBTyxLQUFLM0MsS0FBTCxDQUFXdUIsTUFBcEQ7QUFDRTtBQUFBO0FBQUEsY0FBTSxTQUFTLEtBQUtkLFVBQXBCLEVBQWdDLElBQUcsY0FBbkM7QUFBQTtBQUFBLFdBREY7QUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRkY7QUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBSEY7QUFJRSw4QkFBQyxTQUFELElBQVcsWUFBWSxLQUFLQSxVQUE1QixFQUF3QyxVQUFVLEtBQUttQyxJQUF2RCxFQUE2RCxRQUFRLEtBQUs1QyxLQUFMLENBQVcwQyxlQUFoRixHQUpGO0FBS0UsOEJBQUMsWUFBRCxJQUFjLGNBQWMsS0FBS0csUUFBakMsRUFBMkMsUUFBUSxLQUFLN0MsS0FBTCxDQUFXd0Msa0JBQTlEO0FBTEY7QUFGRixPQURGO0FBWUQ7Ozs7RUEvQ2VmLE1BQU1DLFM7O0FBa0R4QnFCLFNBQVNDLE1BQVQsQ0FBZ0Isb0JBQUMsR0FBRCxPQUFoQixFQUF5QkMsU0FBU0MsY0FBVCxDQUF3QixLQUF4QixDQUF6QiIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBMb2dpbkZvcm0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBlbWFpbDogJycsXG4gICAgICBwYXNzd29yZDogJydcbiAgICB9XG4gICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpXG4gICAgdGhpcy5oYW5kbGVFbWFpbCA9IHRoaXMuaGFuZGxlRW1haWwuYmluZCh0aGlzKVxuICAgIHRoaXMuaGFuZGxlUGFzc3dvcmQgPSB0aGlzLmhhbmRsZVBhc3N3b3JkLmJpbmQodGhpcylcbiAgfVxuICBoYW5kbGVTdWJtaXQoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIHZhciBlbWFpbCA9IHRoaXMuc3RhdGUuZW1haWxcbiAgICB2YXIgcGFzc3dvcmQgPSB0aGlzLnN0YXRlLnBhc3N3b3JkXG4gICAgdmFyIGNsb3NlTW9kYWwgPSB0aGlzLnByb3BzLmNsb3NlTW9kYWxcbiAgICBmZXRjaCgnL3VzZXJzJykudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyAhPT0gMjAwKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdMb29rcyBsaWtlIHRoZXJlIHdhcyBhIHByb2JsZW0uIFN0YXR1cyBDb2RlOiAnICsgcmVzcG9uc2Uuc3RhdHVzKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgcmVzcG9uc2UuanNvbigpLnRoZW4oYm9keSA9PiBib2R5LmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIGlmIChpdGVtLnBhc3N3b3JkID09PSBwYXNzd29yZCAmJiBpdGVtLmVtYWlsID09PSBlbWFpbCkge1xuICAgICAgICAgIGNsb3NlTW9kYWwoKVxuICAgICAgICB9XG4gICAgICB9KSlcbiAgICB9KVxuICB9XG4gIGhhbmRsZUVtYWlsKGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtlbWFpbDogZS50YXJnZXQudmFsdWV9KVxuICB9XG4gIGhhbmRsZVBhc3N3b3JkKGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtwYXNzd29yZDogZS50YXJnZXQudmFsdWV9KVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4oXG4gICAgICA8ZGl2IHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlc30+XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgPHA+RW1haWw8L3A+XG4gICAgICAgICAgPGlucHV0IGlkPVwiZW1haWxcIiB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUVtYWlsfSAvPlxuICAgICAgICAgIDxwPlBhc3N3b3JkPC9wPlxuICAgICAgICAgIDxpbnB1dCBpZD1cInBhc3N3b3JkXCIgdHlwZT1cInBhc3N3b3JkXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlUGFzc3dvcmR9IC8+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiAvPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8cD5JZiB5b3UgaGF2ZW4ndCBhbHJlYWR5IGNyZWF0ZWQgYW4gYWNjb3VudCwgcmVnaXN0ZXIgYmVsb3c6PC9wPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMucHJvcHMuc2hvd05leHR9PlJlZ2lzdGVyPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5wcm9wcy5jbG9zZU1vZGFsfT5SZXR1cm48L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5jbGFzcyBSZWdpc3RlckZvcm0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG5cbiAgICB9XG4gICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpXG4gICAgdGhpcy5oYW5kbGVGaXJzdE5hbWUgPSB0aGlzLmhhbmRsZUZpcnN0TmFtZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5oYW5kbGVMYXN0TmFtZSA9IHRoaXMuaGFuZGxlTGFzdE5hbWUuYmluZCh0aGlzKVxuICAgIHRoaXMuaGFuZGxlRW1haWwgPSB0aGlzLmhhbmRsZUVtYWlsLmJpbmQodGhpcylcbiAgICB0aGlzLmhhbmRsZVBhc3N3b3JkID0gdGhpcy5oYW5kbGVQYXNzd29yZC5iaW5kKHRoaXMpXG4gIH1cbiAgaGFuZGxlU3VibWl0KGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICB2YXIganNvbiA9IHtcbiAgICAgIG5hbWU6IHRoaXMuc3RhdGUuZmlyc3RuYW1lICsgJyAnICsgdGhpcy5zdGF0ZS5sYXN0bmFtZSxcbiAgICAgIGVtYWlsOiB0aGlzLnN0YXRlLmVtYWlsLFxuICAgICAgcGFzc3dvcmQ6IHRoaXMuc3RhdGUucGFzc3dvcmRcbiAgICB9XG4gICAgY29uc29sZS5sb2coanNvbilcbiAgICBmZXRjaCgnL3VzZXJzJywge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShqc29uKVxuICAgIH0pXG4gIH1cbiAgaGFuZGxlRmlyc3ROYW1lKGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtmaXJzdG5hbWU6IGUudGFyZ2V0LnZhbHVlfSlcbiAgfVxuICBoYW5kbGVMYXN0TmFtZShlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7bGFzdG5hbWU6IGUudGFyZ2V0LnZhbHVlfSlcbiAgfVxuICBoYW5kbGVFbWFpbChlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7ZW1haWw6IGUudGFyZ2V0LnZhbHVlfSlcbiAgfVxuICBoYW5kbGVQYXNzd29yZChlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7cGFzc3dvcmQ6IGUudGFyZ2V0LnZhbHVlfSlcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxmb3JtIHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlc30gb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fT5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnByb3BzLnNob3dQcmV2aW91c30+QmFjayB0byBMb2dpbjwvYnV0dG9uPlxuICAgICAgICA8aDU+PC9oNT5cbiAgICAgICAgPHA+VGhhbmsgeW91IGZvciBjcmVhdGluZyBhbiBhY2NvdW50IHdpdGggdXMsIHBsZWFzZSBlbnRlciB5b3VyIG5hbWUgYW5kIGVtYWlsIGFkZHJlc3MgYW5kIGNyZWF0ZSBhIHBhc3N3b3JkLjwvcD5cbiAgICAgICAgPHA+Rmlyc3QgTmFtZTwvcD5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlRmlyc3ROYW1lfS8+XG4gICAgICAgIDxwPkxhc3QgTmFtZTwvcD5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlTGFzdE5hbWV9Lz5cbiAgICAgICAgPHA+RW1haWw8L3A+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUVtYWlsfS8+XG4gICAgICAgIDxwPlBhc3N3b3JkPC9wPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlUGFzc3dvcmR9Lz5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiAvPlxuICAgICAgPC9mb3JtPlxuICAgIClcbiAgfVxufVxuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzdHlsZXM6IHtcbiAgICAgICAgbGVmdDogJy05OTlweCdcbiAgICAgIH0sXG4gICAgICByZWdpc3RlckZvcm1TdHlsZXM6IHtcbiAgICAgICAgZGlzcGxheTogJ25vbmUnXG4gICAgICB9LFxuICAgICAgbG9naW5Gb3JtU3R5bGVzOiB7XG4gICAgICAgIGRpc3BsYXk6ICdibG9jaydcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5iZWdpbkxvZ2luID0gdGhpcy5iZWdpbkxvZ2luLmJpbmQodGhpcylcbiAgICB0aGlzLmNsb3NlTW9kYWwgPSB0aGlzLmNsb3NlTW9kYWwuYmluZCh0aGlzKVxuICAgIHRoaXMubmV4dCA9IHRoaXMubmV4dC5iaW5kKHRoaXMpXG4gICAgdGhpcy5wcmV2aW91cyA9IHRoaXMucHJldmlvdXMuYmluZCh0aGlzKVxuICB9XG4gIGJlZ2luTG9naW4oKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7c3R5bGVzOiB7bGVmdDogJzAnLCBoZWlnaHQ6ICdhdXRvJ319KVxuICB9XG4gIGNsb3NlTW9kYWwoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7c3R5bGVzOiB7ZGlzcGxheTogJ25vbmUnfX0pXG4gIH1cbiAgbmV4dCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtsb2dpbkZvcm1TdHlsZXM6IHtkaXNwbGF5OiAnbm9uZSd9fSlcbiAgICB0aGlzLnNldFN0YXRlKHtyZWdpc3RlckZvcm1TdHlsZXM6IHtkaXNwbGF5OiAnYmxvY2snfX0pXG4gIH1cbiAgcHJldmlvdXMoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIHRoaXMuc2V0U3RhdGUoe2xvZ2luRm9ybVN0eWxlczoge2Rpc3BsYXk6ICdibG9jayd9fSlcbiAgICB0aGlzLnNldFN0YXRlKHtyZWdpc3RlckZvcm1TdHlsZXM6IHtkaXNwbGF5OiAnbm9uZSd9fSlcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxpbnB1dCBvbkNsaWNrPXt0aGlzLmJlZ2luTG9naW59IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIkFjY291bnRcIiAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaXRcIiBpZD1cInBvcC11cFwiIHN0eWxlPXt0aGlzLnN0YXRlLnN0eWxlc30+XG4gICAgICAgICAgPHNwYW4gb25DbGljaz17dGhpcy5jbG9zZU1vZGFsfSBpZD1cImNsb3NlLXBvcC11cFwiPiYjMTAwMDU7PC9zcGFuPlxuICAgICAgICAgIDxzcGFuPkFjY291bnQ8L3NwYW4+XG4gICAgICAgICAgPGg1PmVudGVyIHlvdXIgYWNjb3VudCBpbmZvcm1hdGlvbiBvciByZWdpc3RlciBoZXJlPC9oNT5cbiAgICAgICAgICA8TG9naW5Gb3JtIGNsb3NlTW9kYWw9e3RoaXMuY2xvc2VNb2RhbH0gc2hvd05leHQ9e3RoaXMubmV4dH0gc3R5bGVzPXt0aGlzLnN0YXRlLmxvZ2luRm9ybVN0eWxlc30vPlxuICAgICAgICAgIDxSZWdpc3RlckZvcm0gc2hvd1ByZXZpb3VzPXt0aGlzLnByZXZpb3VzfSBzdHlsZXM9e3RoaXMuc3RhdGUucmVnaXN0ZXJGb3JtU3R5bGVzfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKVxuIl19