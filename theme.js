import { ThemeProvider, createTheme } from '@rneui/themed';

const theme = createTheme({
  lightColors: {
    primary: "#FAF3F3"

  },
  darkColors: {
    primary: '#827397',
    // secondary: '#D8B9C3',
    // background: '#363062',
    // white: "#EEEEEE"
  },
  mode: 'dark',
  Button: {
    raised: true,
    titleStyle: {
      // color: '#EEEEEE',
    },
    backgroundColor: '#444',
    padding: 10, 
    marginTop: 10,
    borderRadius: 10
	},

})

export default theme
