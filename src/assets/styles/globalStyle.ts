import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
	:root {
    --blue-400: #5181B8;
    --blue_420: #4A76A8;
    --blue_600: #2A5885;
    --blue_640: #224B7A;
    --blue_800: #1D3A5C;
    --blue_980: #001433;
    --blue_1000: #2A5885;
    --blue_bright: #5C9CE6;

    --light_blue_40: #E5EBF1;
    --light_blue_80: #DFE6ED;
    --light_blue_100: #DAE2EA;
    --light_blue_300: #9EB4C8;
    --light_blue_400: #7996B2;
    --light_blue_500: #577CA1;
    --light_blue_700: #45688E;
    --light_blue_A300: #8FADC8;

    --steel_gray_10: #FAFBFC;
    --steel_gray_20: #F7F8FA;
    --steel_gray_40: #F0F2F5;
    --steel_gray_60: #EDEEF0;
    --steel_gray_80: #E7E8EC;
    --steel_gray_100: #DCE1E6;
    --steel_gray_120: #D3D9DE;
    --steel_gray_140: #C5D0DB;
    --steel_gray_200: #AEB7C2;
    --steel_gray_300: #99A2AD;
    --steel_gray_400: #818C99;
    --steel_gray_500: #6F7985;
    --steel_gray_540: #626D7A;
    --steel_gray_600: #4E5966;
    --steel_gray_A540: #55677D;

    --gray_80: #E7E8EC;
    --gray_120: #D3D9DE;
    --gray_200: #CCCCCC;
    --gray_300: #B2B2B2;
    --gray_400: #939393;
    --gray_500: #828282;
    --gray_600: #656565;
    --gray_700: #555555;
    --gray_800: #333333;
    --gray_900: #222222;
    --gray_960: #0A0A0A;

    --white: #FFFFFF;
    --black: #000000;
    --link: #2A5885;
    --red: #E64646;
    --red_dark: #DB3B3B;
    --red_light: #FFD6CC;
    --red_nice: #FF3347;
    --sky_80: #B2DEFF;
    --sky_100: #99D3FF;
    --sky_200: #70C1FF;
    --yellow: #FFC107;
    --yellow_light: #FAEFD2;
	}
	
  body {
    font-family: 'Roboto', sans-serif;
		background-color: ${({ theme }) => theme.colors.bg.primary};
  }

  h1 {
    font-size: ${({ theme }) => theme.sizes.font.xl};
    font-weight: ${({ theme }) => theme.sizes.weight.medium};
  }
	
  p {
		color: ${({ theme }) => theme.colors.font.primary};
    font-size: ${({ theme }) => theme.sizes.font.m};
    font-weight: ${({ theme }) => theme.sizes.weight.regular};
  }
`
