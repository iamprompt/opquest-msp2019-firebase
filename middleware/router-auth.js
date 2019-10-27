export default function({ store, redirect, route }) {
  if (isLogin(store) && route.name === '') {
    return redirect('/quest')
  }

  if (!isLogin(store) && isQuestRoute(route)) {
    return redirect('/')
  }
}

const isLogin = (store) => {
  return store && store.state && store.state.user
}

const isQuestRoute = (route) => {
  if (route.matched.some((record) => record.path === '/quest')) {
    return true
  }
}
