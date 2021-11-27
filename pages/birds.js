import Image from "next/image";
import Carousel from "../components/Carousel";

const birds = [
  {
    name: "Eastern Bluebird",
    src: "/birds/eastern-bluebird.jpeg",
    text: "Taken in Middletown, CT. These birds are very cute, and they know it.",
  },
  {
    name: "Anna's Hummingbird",
    src: "/birds/annas-or-costas.jpeg",
    text: "Labeling this an Anna's Hummingbird, but for all I know it is a Costa's Hummingbird. If you know, fill me in!",
  },
  {
    name: "Black-necked Stilt",
    src: "/birds/black-necked-stilt.jpeg",
    text: "Very funny to watch this thing skitter through the shallows. Appears both awkward and confident at the same time.",
  },
  {
    name: "Common Yellowthroat",
    src: "/birds/common-yellowthroat.jpeg",
    text: "Taken at the Audobon society in Wellfleet, MA. It's a kind of warbler. Nicknamed \"the yellow bandit\", you guess why.",
  },
  {
    name: "Red-tailed Hawk",
    src: "/birds/red-tailed-hawk.jpeg",
    text: "Absolutely love the eyebrows on this guy.",
  },
  {
    name: "Say's Phoebe",
    src: "/birds/says-phoebe.jpeg",
    text: "95% sure this is a Says Phoebe, but these Flycatchers can be tricky to identify correctly. From a backyard in Casper, WY. This one is posing for its senior yearbook picture.",
  },
  {
    name: "Yellow Warbler",
    src: "/birds/yellow-warbler.jpeg",
    text: "Small beautiful jumpy bird, less than 6 inches from tail to head. Migrates thousands of miles north from their tropical habitat each year to eat bugs that annoy you.",
  },
  {
    name: "Killdeer",
    src: "/birds/killdeer.jpeg",
    text: "The facial expressions and movements of these birds embody pure anxiety. At no point in its life does a Killdeer ever appear relaxed. This one was pacing back and forth and hiding in a rocky riverbed at Teddy Roosevelt National Park in ND.",
  },
  {
    name: "Common Gallinule",
    src: "/birds/common-gallinule.jpeg",
    text: "Extremely stylish, but maintains a chicken-like vibe. In breeding season, these can be colored more like peacocks.",
  },
  {
    name: "Anna's Hummingbird",
    src: "/birds/annas-hummingbird.jpeg",
    text: "Anna's is one of the more common species of hummingbird you'll find in the southwest. This photo shows off the iridescent quality hummingbirds have - his head is black OR magenta depending on what direction you look at it from.",
  },
  {
    name: "Snowy Egret",
    src: "/birds/snowy-egret.jpeg",
    text: "Taken in Wellfleet, MA. The demand for Snowy Egret feathers to make fashionable hats in the early 1900s is understandable, but fortunately these dorky birds became protected in the 1920s, and today they're not so rare to find in salty marshes across the U.S.",
  },
  {
    name: "Cactus Wren",
    src: "/birds/cactus-wren.jpeg",
    text: "State bird of Arizona!",
  },
  {
    name: "Barn Swallow",
    src: "/birds/barn-swallow.jpeg",
    text: "So small and so fast. They can zip around just feet off the ground and turn on a dime.",
  },
  {
    name: "Mexican Jay",
    src: "/birds/mexican-jay.jpeg",
    text: "Like Blue Jays you might see on the east coast, but with a gray belly and not so much of a crown. Whenever we saw these, they were in flocks of 10-20.",
  },
  {
    name: "Baltimore Oriole",
    src: "/birds/oriole.jpeg",
    text: "Grew up seeing these birds all over New England, so they feel common to me but they really do have some of the most spectacular coloring out of all North American birds.",
  },
  {
    name: "Chickadee",
    src: "/birds/chickadee.jpeg",
    text: "A classic for a reason.",
  },
  {
    name: "Costa's Hummingbird",
    src: "/birds/costas-hummingbird.jpeg",
    text: "Another species of hummingbird that's relatively common in the southwest. Saw dozens examples of this species on our travels, but none with such a beautiful purple scarf.",
  },
  {
    name: "Northern Flicker",
    src: "/birds/northern-flicker.jpeg",
    text: "A truly elegant woodpecker. This one was right in my grandfather's front yard.",
  },
  {
    name: "Brewer's Sparrow",
    src: "/birds/brewers-sparrow.jpeg",
    text: "Sparrows of various types live all over North America, and there are so many kinds that look a lot like this one - brown and white and stripey. Best bet is to get to know the few varieties in your area. This bird was photographed in Saguaro National Park.",
  },
  {
    name: "Avocet",
    src: "/birds/avocet.jpeg",
    text: "Another southwestern wading bird. How about that curved bill?",
  },
  {
    name: "White-winged Dove",
    src: "/birds/white-winged-dove.jpeg",
    text: "Essentially a pigeon, but with a James Bond white-tux look. Found in Mexico and the southwestern states.",
  },
  {
    name: "Cardinal",
    src: "/birds/cardinal.jpeg",
    text: "Cardinals rule. This one lives on Cape Cod.",
  },
  {
    name: "Orange-crowned Warbler",
    src: "/birds/orange-crowned-warbler.jpeg",
    text: "I know what you're thinking, but apparently it's unusual that Orange-crowned Warblers show a visible orange crown. If you don't think it's an Orange-crowned warbler, fine, tell me YOUR theory.",
  },
  {
    name: "Magnificent Hummingbird",
    src: "/birds/magnificent-hummingbird.jpeg",
    text: "One of the larger hummingbirds you will find. As it flies by your head, sounds like a small lawnmower. If you can catch it showing its full iridesence (flaring), the top of its head looks blue as well.",
  },
  {
    name: "Chicken",
    src: "/birds/chicken.jpeg",
    text: "I have no idea what different kinds of chickens there are. This one is very noisy and lives in upstate New York.",
  },
  {
    name: "Cooper's Hawk",
    src: "/birds/coopers-hawk.jpeg",
    text: "Watched this hawk swoop into a yard filled with bird feeders and small birds in an attempt to eat one of them. He actually tried twice and missed both times. Hope he's okay.",
  },
  {
    name: "Rufous Hummingbird",
    src: "/birds/rufous-hummingbird.jpeg",
    text: "Never caught this species in the wild - this picture is from a hummingbird enclosure at the Desert Museum outside of Tuscon. Good on him for mixing up the hummingbird color scheme!",
  },
  {
    name: "Greater Roadrunner",
    src: "/birds/greater-roadrunner.jpeg",
    text: "An actual dinosaur of a bird, loves creepin' around under bushes. This one was photographed in Sabino Canyon, AZ.",
  },
  {
    name: "Greater Yellowlegs",
    src: "/birds/greater-yellowlegs.jpeg",
    text: "Beautiful shorebird! Gets its name from its yellow legs. Taken at the Audobon society in Wellfleet, MA.",
  },
  {
    name: "Hermit Thrush",
    src: "/birds/hermit-thrush.jpeg",
    text: "Hermit Thrushes have this call that sounds like they are singing into a microphone with the echo effect turned on. Awesome to hear one in a rocky canyon or valley while you hike. This one was from Casper, WY.",
  },
  {
    name: "House Finch",
    src: "/birds/house-finch.jpeg",
    text: "House Finches are way common in cities and suburbs around all kinds of human structures. They are invasive in most places they exist in North America -- but they apparently are native to the southwest.",
  },
  {
    name: "Lazuli Bunting",
    src: "/birds/lazuli-bunting.jpeg",
    text: "Photographed in the northern unit of Teddy Roosevelt National Park in ND.",
  },
  {
    name: "Northern Mockingbird",
    src: "/birds/northern-mockingbird.jpeg",
    text: "Found this one jumping around on cactuses in Saguaro National Park. In flight, you see clear white strips across their wings.",
  },
  {
    name: "Phainopepla",
    src: "/birds/phainopepla.jpeg",
    text: "Yep, fain-oh-pepla is actually how you pronounce it. Saw this bird on Halloween, no joke. Scary stuff.",
  },
  {
    name: "Red-Bellied Woodpecker",
    src: "/birds/red-bellied-woodpecker.jpeg",
    text: "One of the first birds that I photographed, in a pine tree in Brewster, MA.",
  },
  {
    name: "American White Pelican",
    src: "/birds/american-white-pelican.jpeg",
    text: "On a pond in the Riparion Preserve in Gilbert, AZ. Pelicans are among the heaviest flying birds.",
  },
  {
    name: "Squirrel",
    src: "/birds/squirrel.jpeg",
    text: "Not a bird at all. Allowed in this list because of how cute it is.",
  },
  {
    name: "Western Kingbird",
    src: "/birds/western-kingbird.jpeg",
    text: "The Eastern Kingbird is black and white, but the Western Kingbird is mostly yellow. This one lives in North Dakota.",
  },
  {
    name: "Western Meadowlark",
    src: "/birds/western-meadowlark.jpeg",
    text: "This Western Meadowlark is from Badlands National Park in SD. He leaves his mouth open on hot days to stay cooler. More than a few states consider this to be their state bird.",
  },
  {
    name: "Yellow-rumped Warbler",
    src: "/birds/yellow-rumped-warbler.jpeg",
    text: "In my experience, the most common warbler you see traveling around the US. As shown here, warblers eat bugs, and I think that's why they are migratory birds. For the yellow-rumped, the yellow on their butt is actually hard to see - I look instead for the yellow on their head and sides.",
  },
  {
    name: "Mountain Bluebird",
    src: "/birds/mountain-bluebird.jpeg",
    text: "One of my all time favorites. More regal than the Eastern Bluebird. Rejects the 60-30-10 color scheme dogma and shows off what he can do with just the blue/white gradient.",
  },
];

export default function Birds() {
  return (
    <section>
      <Carousel slides={birds} />
    </section>
  );
}
