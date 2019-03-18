export const who = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('🤡')
    }, 200)
  })
}

export const what = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('lurks')
    }, 300)
  })
}

export const where = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('in the shadows')
    }, 500)
  })
}


/****************************************************
sequentially calling functions that return a promise
****************************************************/

export const msg_seq = async () => {
  const a = await who()
  const b = await what()
  const c = await where()

  console.log(`${ a } ${ b } ${ c }`)
}


/*************************************************
 in parallel call functions that return a promise
*************************************************/

export const msg_parallel = async () => {
  // Promise.all returns an array with resolved values once all passed-in promises have resolved
  const [a, b, c] = await Promise.all([who(), what(), where()])

  console.log(`${ a } ${ b } ${ c }`)
}


/******************
 promise returning
******************/

// NOTE: this is an async function, so a calling function will receive a promise as a response
const _hello = async () => {
  return 'Hello Alligator'
}

export const promise_returned = () => {
  // assigning an async function to a variable will return a promise, not a resolved response
  const b = _hello()
  console.log(b)

  // calling .then() will instead return the resolved response, not the promise
  _hello()
    .then(x => console.log(x)) // Hello alligator
}



/***************
 error handling
***************/

// NOTE: this isn't an async function, but it does return a promise
export const yayOrNay = () => {
  return new Promise((resolve, reject) => {
    const val = Math.round(Math.random() * 1) // 0 or 1, at random

    val ? resolve('Lucky!!') : reject('Nope 😠')
  })
}

export const promise_error_handling = async () => {
  try {
    const msg = await yayOrNay()
    console.log(msg)
  } catch (err) {
    console.log(err)
  }
}

/************************
 awaiting a nested async
************************/
export const await_nested = async () => {
  try {

    const testFunction = async () => {
      let msg
      msg = await yayOrNay()
      msg = await yayOrNay()
      msg = await yayOrNay()
      msg = await yayOrNay()
      return msg
    }
    const response = await testFunction()
    console.log(response)

  } catch (err) {
    console.log(err)
  }
}


/* =============
TEST THEM OUT!
note, as they are now, these will run out of order
============= */
msg_seq()

msg_parallel()

promise_returned()

// testing error handling
promise_error_handling()
promise_error_handling()
promise_error_handling()
promise_error_handling()
promise_error_handling()
promise_error_handling()

// error handling with a catch statement
promise_error_handling()
  .catch(x => console.log(x))

// awaiting a nested promise
await_nested()