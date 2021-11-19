import Image from "next/image";
import Carousel from "../components/Carousel";

const birds = [
  {
    name: "Eastern Bluebird",
    src: "/birds/eastern-bluebird.jpeg",
    srcSet: "/birds/eastern-bluebird 1.jpeg",
    text: "Taken in Middletown, CT. These birds are very cute, and they know it.",
  },
  {
    name: "Black-necked Stilt",
    src: "/birds/black-necked-stilt.jpeg",
    text: "Very funny to watch this thing skitter through the shallows. Appears both awkward and confident at the same time.",
  },
  {
    name: "Common Yellowthroat",
    src: "/birds/common-yellowthroat.jpeg",
    srcSet: "/birds/common-yellowthroat 1.jpeg",
    text: "Taken at the Audobon society in Wellfleet, MA. It's a kind of warbler. Nicknamed \"the yellow bandit\", you guess why.",
  },
  {
    name: "Says Phoebe",
    src: "/birds/says-phoebe.jpeg",
    srcSet: "/birds/says-phoebe 1.jpeg",
    text: "95% sure this is a Says Phoebe, but these Flycatchers can be tricky to identify correctly. From a backyard in Casper, WY. This one is posing for its senior yearbook picture.",
  },
  {
    name: "Killdeer",
    src: "/birds/killdeer.jpeg",
    srcSet: "/birds/killdeer 1.jpeg",
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
    srcSet: "/birds/annas-hummingbird 1.jpeg",
    text: "Anna's is one of the more common species of hummingbird you'll find in the southwest. This photo shows off the iridescent quality hummingbirds have - his head is black OR magenta depending on what direction you look at it from.",
  },
  {
    name: "Costa's Hummingbird",
    src: "/birds/costas-hummingbird.jpeg",
    text: "Another species of hummingbird that's relatively common in the southwest. Saw dozens examples of this species on our travels, but none with such a beautiful purple scarf.",
  },
  {
    name: "Brewer's Sparrow",
    src: "/birds/brewers-sparrow.jpeg",
    srcSet: "/birds/brewers-sparrow 1.jpeg",
    text: "Sparrows of various types live all over North America, and there are so many kinds that look a lot like this one - brown and white and stripey. Best bet is to get to know the few varieties in your area. This bird was photographed in Saguaro National Park.",
  },
  {
    name: "Cardinal",
    src: "/birds/cardinal.jpeg",
    srcSet: "/birds/cardinal 1.jpeg",
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
    srcSet: "/birds/chicken 1.jpeg",
    text: "I have no idea what different kinds of chickens there are. This one is very noisy and lives in upstate New York.",
  },
  {
    name: "Cooper's Hawk",
    src: "/birds/coopers-hawk.jpeg",
    srcSet: "/birds/coopers-hawk 1.jpeg",
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
    srcSet: "/birds/greater-roadrunner 1.jpeg",
    text: "An actual dinosaur of a bird, loves creepin' around under bushes. This one was photographed in Sabino Canyon, AZ.",
  },
  {
    name: "Greater Yellowlegs",
    src: "/birds/greater-yellowlegs.jpeg",
    srcSet: "/birds/greater-yellowlegs 1.jpeg",
    text: "Beautiful shorebird! Gets its name from its yellow legs. Taken at the Audobon society in Wellfleet, MA.",
  },
  {
    name: "Hermit Thrush",
    src: "/birds/hermit-thrush.jpeg",
    srcSet: "/birds/hermit-thrush 1.jpeg",
    text: "Hermit Thrushes have this call that sounds like they are singing into a microphone with the echo effect turned on. Awesome to hear one in a rocky canyon or valley while you hike. This one was from Casper, WY.",
  },
  {
    name: "House Finch",
    src: "/birds/house-finch.jpeg",
    srcSet: "/birds/house-finch 1.jpeg",
    text: "House Finches are way common in cities and suburbs around all kinds of human structures. They are invasive in most places they exist in North America -- but they apparently are native to the southwest.",
  },
  {
    name: "Lazuli Bunting",
    src: "/birds/lazuli-bunting.jpeg",
    srcSet: "/birds/lazuli-bunting 1.jpeg",
    text: "Photographed in the northern unit of Teddy Roosevelt National Park in ND.",
  },
  {
    name: "Northern Mockingbird",
    src: "/birds/northern-mockingbird.jpeg",
    srcSet: "/birds/northern-mockingbird 1.jpeg",
    text: "Found this one jumping around on cactuses in Saguaro National Park. In flight, you see clear white strips across their wings.",
  },
  {
    name: "Phainopepla",
    src: "/birds/phainopepla.jpeg",
    srcSet: "/birds/phainopepla 1.jpeg",
    text: "Yep, fain-oh-pepla is actually how you pronounce it. Saw this bird on Halloween, no joke. Scary stuff.",
  },
  {
    name: "Red-Bellied Woodpecker",
    src: "/birds/red-bellied-woodpecker.jpeg",
    srcSet: "/birds/red-bellied-woodpecker 1.jpeg",
    text: "One of the first birds that I photographed, in a pine tree in Brewster, MA.",
  },
  {
    name: "Squirrel",
    src: "/birds/squirrel.jpeg",
    srcSet: "/birds/squirrel 1.jpeg",
    text: "Not a bird at all. Allowed in this list because of how cute it is.",
  },
  {
    name: "Western Kingbird",
    src: "/birds/western-kingbird.jpeg",
    srcSet: "/birds/western-kingbird 1.jpeg",
    text: "The Eastern Kingbird is black and white, but the Western Kingbird is mostly yellow. This one lives in North Dakota.",
  },
  {
    name: "Western Meadowlark",
    src: "/birds/western-meadowlark.jpeg",
    srcSet: "/birds/western-meadowlark 1.jpeg",
    text: "This Western Meadowlark is from Badlands National Park in SD. He leaves his mouth open on hot days to stay cooler. More than a few states consider this to be their state bird.",
  },
  {
    name: "Yellow-rumped Warbler",
    src: "/birds/yellow-rumped-warbler.jpeg",
    srcSet: "/birds/yellow-rumped-warbler 1.jpeg",
    text: "In my experience, the most common warbler you see traveling around the US. As shown here, warblers eat bugs, and I think that's why they are migratory birds. For the yellow-rumped, the yellow on their butt is actually hard to see - I look instead for the yellow on their head and sides.",
  },
  {
    name: "Mountain Bluebird",
    src: "/birds/mountain-bluebird.jpeg",
    srcSet: "/birds/mountain-bluebird 1.jpeg",
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
