import { Component } from 'react';

class DarkModeToggle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isToggled: false,
    };

    this.handleToggle = this.handleToggle.bind(this);
  }

  componentDidMount() {
    this.setState({ isToggled: this.isDarkMode() });
  }

  componentDidUpdate() {
    localStorage.theme = this.state.isToggled ? 'dark' : 'light';

    this.toggleDarkMode();
  }

  handleToggle() {
    this.setState(({ isToggled }) => ({ isToggled: !isToggled }));
  }

  isDarkMode() {
    if (typeof window === 'undefined') return;

    return localStorage.theme == 'dark';
  }

  toggleDarkMode() {
    if (typeof window === 'undefined') return;
    if (!('theme' in localStorage) || localStorage.theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  render() {
    const { isToggled } = this.state;
    return (
      <div
        className='z-10 flex items-center transition-colors duration-700 text-primary-dark dark:text-primary dark:bg-primary-dark bg-primary'
        onClick={this.handleToggle}
      >
        <input type='checkbox' name='toggle' className='hidden' />
        <label
          className='relative flex w-12 h-6 cursor-pointer'
          htmlFor='toggle'
        >
          <span className='absolute top-0 left-0 w-full h-full rounded-full bg-primary-dark dark:bg-primary'></span>
          <span
            className={`absolute z-10 flex items-center justify-center w-6 h-6 transition-transform duration-700 ease-in-out transform ${
              isToggled
                ? 'translate-x-full bg-purple-400'
                : 'translate-x-0 bg-yellow-400'
            }  border-2 border-primary-dark dark:border-primary rounded-full`}
          >
            <span
              className={`absolute z-10 transition-size duration-700 ease-in-out ${
                isToggled ? 'right-2 w-4 h-4' : 'left-0 h-0 w-0'
              } rounded-full bg-primary-dark dark:bg-primary`}
            ></span>
          </span>
        </label>
      </div>
    );
  }
}

export default DarkModeToggle;
