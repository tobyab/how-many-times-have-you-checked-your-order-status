chrome.runtime.sendMessage({ action: 'getCount' }, (response) => {
  const count = response.count || 0;
  chrome.runtime.sendMessage({ action: 'pageLoaded', count });
  if (count === 0) {
    alert(`This is your first time checking your order status. Nice one!`);
  } else if (count > 5) {
    alert(`You've checked your order status more than five times. Slow down!`);
  } else if (count > 10) {
    alert(`This is your tenth time checking your order status. STOP!`);
  } else if (count > 100) {
    alert(`You've checked your order status more than 100 times. You're crazy!`);
  } else if (count > 1000) {
    alert(`HOW ARE YOU SEEING THIS??????`);
  } else {
    alert(`You've checked your order status ${count} times. That's a normal amount...`);
  }
});
