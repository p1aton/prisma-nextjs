import { MittEmitter } from 'next/dist/next-server/lib/mitt'
import { RouterContext } from 'next/dist/next-server/lib/router-context'
import React from 'react'
import { baseRender } from 'src/tests/utils'
import App from '..'

jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '',
      query: {},
      asPath: '',
    }
  },
}))

const Component: React.FC = ({ children }) => {
  return <div id="test">Text {children}</div>
}

// TODO: cover App.getInitialProps()
describe('App', () => {
  it('Render App', () => {
    const tree = baseRender(
      <RouterContext.Provider
        value={{
          route: '/',
          pathname: '/',
          asPath: '/',
          query: {},
          basePath: '',
          push: (_) => {
            return Promise.resolve(true)
          },
          replace: () => {
            return Promise.resolve(true)
          },
          reload: () => {
            //
          },
          prefetch: async () => {
            //
          },
          back: () => {
            //
          },
          beforePopState: () => {
            //
          },
          isFallback: false,
          events: {} as MittEmitter,
          isReady: true,
        }}
      >
        <App
          Component={Component}
          pageProps={{
            children: 'Some content',
          }}
        />
      </RouterContext.Provider>
    )

    expect(tree.baseElement).toMatchSnapshot()
    expect(tree.container).toMatchSnapshot()
  })
})
