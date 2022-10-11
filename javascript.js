const DATABASE = [{
       "quote":"Believe you can and you’re halfway there.","author":"Theodore Roosevelt"},
{
       "quote":"Everything you’ve ever wanted is on the other side of fear.","author":"George Addair"},
{
       "quote":"We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light.","author":"Plato"},
{
       "quote":"Teach thy tongue to say, “I do not know,” and thous shalt progress.","author":"Maimonides"},
{
       "quote":"Start where you are. Use what you have.  Do what you can.","author":"Arthur Ashe"},
{
       "quote":"When I was 5 years old, my mother always told me that happiness was the key to life.  When I went to school, they asked me what I wanted to be when I grew up.  I wrote down ‘happy’.  They told me I didn’t understand the assignment, and I told them they didn’t understand life.","author":"John Lennon"},
{
       "quote":"Fall seven times and stand up eight.","author":"Japanese Proverb"},
{
       "quote":"When one door of happiness closes, another opens, but often we look so long at the closed door that we do not see the one that has been opened for us.","author":"Helen Keller"},
{
       "quote":"Everything has beauty, but not everyone can see.","author":"Confucius"},
{
       "quote":"How wonderful it is that nobody need wait a single moment before starting to improve the world.","author":"Anne Frank"},
{
       "quote":"When I let go of what I am, I become what I might be.","author":"Lao Tzu"},
{
       "quote":"Life is not measured by the number of breaths we take, but by the moments that take our breath away.","author":"Maya Angelou"},
{
       "quote":"Happiness is not something readymade.  It comes from your own actions.","author":"Dalai Lama"},
{
       "quote":"If you’re offered a seat on a rocket ship, don’t ask what seat! Just get on.","author":"Sheryl Sandberg"},
{
       "quote":"First, have a definite, clear practical ideal; a goal, an objective. Second, have the necessary means to achieve your ends; wisdom, money, materials, and methods. Third, adjust all your means to that end.","author":"Aristotle"},
{
       "quote":"If the wind will not serve, take to the oars.","author":"Latin Proverb"},
{
       "quote":"You can’t fall if you don’t climb.  But there’s no joy in living your whole life on the ground.","author":"Unknown"},
{
       "quote":"We must believe that we are gifted for something, and that this thing, at whatever cost, must be attained.","author":"Marie Curie"},
{
       "quote":"Too many of us are not living our dreams because we are living our fears.","author":"Les Brown"},
{
       "quote":"Challenges are what make life interesting and overcoming them is what makes life meaningful.","author":"Joshua J. Marine"},
{
       "quote":"If you want to lift yourself up, lift up someone else.","author":"Booker T. Washington"},
{
       "quote":"I have been impressed with the urgency of doing. Knowing is not enough; we must apply. Being willing is not enough; we must do.","author":"Leonardo da Vinci"},
{
       "quote":"Limitations live only in our minds.  But if we use our imaginations, our possibilities become limitless.","author":"Jamie Paolinetti"}];
const COLORS = [
  '#16a085',
  '#27ae60',
  '#2c3e50',
  '#f39c12',
  '#e74c3c',
  '#9b59b6',
  '#FB6964',
  '#342224',
  '#472E32',
  '#BDBB99',
  '#77B1A9',
  '#73A857'];

window.onload = init;
function init(){
  newQuote()
}

function newQuote() {
  let index = Math.floor(Math.random() * DATABASE.length);
  let randomQuote = DATABASE[index].quote;
  let randomAuthor = DATABASE.[index].author;
  document.getElementById("text").innerText = randomQuote;
  document.getElementById("author").innerText = randomAuthor;

  let colorIndex = Math.floor(Math.random() * COLORS.length);
  let randomColor = COLORS[colorIndex];
  var r = document.querySelector(':root');
  r.style.setProperty('--main-color', randomColor);

  let tweet = "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="
  tweet += randomQuote.replaceAll(" ", "%20");
  tweet += " " + randomAuthor.replaceAll(" ", "%20");
  document.getElementById("tweet-quote").href = tweet;

  let tumbler = "https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption="
  tumbler += randomAuthor.replaceAll(" ", "%20");
  tumbler += "&content=";
  tumbler += " " + randomQuote.replaceAll(" ", "%20");;
  tumbler += "&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button";
  document.getElementById("tumblr-quote").href = tumbler;
}
