function quotechange() {

    let target = document.getElementById("paragraph");
    target.innerText = randomquotes();
   

    function randomquotes() {
      let arr = [
        " โIf you can't sacrifice for what you want, what you want become the sacrifice..โ โ๐ฏ๐ฉโ๐ป",
        "โWhen you have a dream, you've got to grab it and never let go.. โ ๐ง ๐ ๐ฉโ๐ป.",
        "โNothing is impossible. The word itself says 'I'm possible!โ๐ค๐ค'",
        "โBe like snow Beautiful but cold..!โ๐๐ค",
        "โI'm surviving on caffeine and a cold heart..โ โค๏ธโ๐ฉน",
        "โWe are all in the gutter, but some of us are looking at the stars..โ๐ซ๐ซ ",
        "โLive life to the fullest, and focus on the positive..โ๐๐ค ",
        "โ A cold heart is its own worst punishment..โ ๐ค๐ฏ ",
        "โ Those who are heartless, once cared too much..โ ๐",
        "โYou do not find the happy life. You make it..โ๐ค๐",
        " โStay close to anything that makes you glad you are alive..โ๐๐","โBehave like a stupid think like a genius..โ ๐คโค๏ธโ๐ฅ","โBeleive in yourself when no one beleive in you.. โ๐๏ธ๐","โConfuse them with youe silence , Shock them with your results..โ๐คซ๐ฅ",
        "โYou're braver than you believe, and stronger than you seem, and smarter than you think. ...โ๐ง๐๏ธ",
        "โThe only time you fail is when you fall down and stay down..โ๐คผโโ๏ธ๐๏ธ",
        "โThe struggle youโre in today is developing the strength you need tomorrow...โ๐ง ๐ ๐ฉโ๐ป",
        "โHappiness is the only thing that multiplies when you share it..โ๐โค๏ธ","โWinning doesnโt always mean being first. Winning means youโre doing better than youโve done before..โ๐ฅ๐ ","โNo one is perfect โ thatโs why pencils have erasers..โ๐ฏโ","โSuccess is the sum of small efforts repeated day in and day out..โ๐๏ธ๐ฅ๐"
      ];

      let random = arr[Math.floor(Math.random() * arr.length)];
      return random;
      
    }

    function texteffect() {
      target.style.transition="width 3s";
      
    }
    target.appendChild(texteffect())
    
  }
