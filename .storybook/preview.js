import Image from 'next/image'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

Image.propTypes = {
  unoptimized: null,
}

Image.defaultProps = {
  unoptimized: true,
}

const OriginalNextImage = Image.default

Object.defineProperty(Image, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
})
