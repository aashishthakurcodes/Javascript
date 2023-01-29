function quotechange() {
 

    let target = document.getElementById("paragraph");

    target.innerText = randomquotes();

    function randomquotes() {
      let arr = [
        " “If you can't sacrifice for what you want, what you want become the sacrifice” ✍💯👩‍💻",
        "“When you have a dream, you've got to grab it and never let go ” 🧑 👉 👩‍💻.",
        "“Nothing is impossible. The word itself says 'I'm possible!”🤞🤗'",
        "“Be like snow Beautiful but cold..!”😈🖤",
        "“I'm surviving on caffeine and a cold heart” ❤️‍🩹",
        "“We are all in the gutter, but some of us are looking at the stars.”💫💫 ",
        "“Live life to the fullest, and focus on the positive.”😌 ",
        "“ A cold heart is its own worst punishment.” 🖤💯 ",
        "“ Those who are heartless, once cared too much.” 🙌",
        "“You do not find the happy life. You make it.”🤗",
        " “Stay close to anything that makes you glad you are alive.”😌💙","“Behave like a stupid think like a genius” ❤️‍🔥","“Beleive in yourself when no one beleive in you ”🙂😎","“Confuse them with youe silence , Shock them with your results”🤫🔥",
        "“You're braver than you believe, and stronger than you seem, and smarter than you think. ...”",
        "The only time you fail is when you fall down and stay down",
      ];
console.log(arr.length);
      let random = arr[Math.floor(Math.random() * arr.length)];
      return random;
    }
  }
