import Image from "next/image";
import Carousel from "../components/Carousel";

const birds = [
  {
    name: "Anna's Hummingbird",
    src: "/birds/annas-hummingbird.jpeg",
    width: 1200,
    height: 900,
    text: "Hummingbirds beat their wings 10-15 times per second. They often have iridescent feathers. This one has a black OR magenta head depending on what direction you look at it from.",
  },
  {
    name: "Brewer's Sparrow",
    src: "/birds/brewers-sparrow.jpeg",
    width: 1200,
    height: 900,
    text: "Sparrows of various types live all over North America, and there are so many kinds that look a lot like this one - brown and white and stripey. Best bet is to get to know the few varieties in your area. This bird was photographed in Saguaro National Park.",
  },
  {
    name: "Cardinal",
    src: "/birds/cardinal.jpeg",
    width: 1200,
    height: 899,
    text: "Cardinals rule. This one lives on Cape Cod.",
  },
  {
    name: "Chicken",
    src: "/birds/chicken.jpeg",
    width: 1200,
    height: 899,
    text: "I have no idea what different kinds of chickens there are. This one is very noisy and lives in upstate New York.",
  },
  {
    name: "Common Yellowthroat",
    src: "/birds/common-yellowthroat.jpeg",
    width: 1200,
    height: 900,
    text: "Taken at the Audobon society in Eastham, MA. It's a kind of warbler. Nicknamed \"the yellow bandit\", I'm assuming because of its black mask over the yellow body, and not because of any particular behavior.",
  },
  {
    name: "Cooper's Hawk",
    src: "/birds/coopers-hawk.jpeg",
    width: 900,
    height: 1200,
    text: "Watched this hawk swoop into a yard filled with bird feeders and small birds in an attempt to eat one of them. He actually tried twice and missed both times. Hope he's okay.",
  },
  {
    name: "Eastern Bluebird",
    src: "/birds/eastern-bluebird.jpeg",
    width: 1200,
    height: 900,
    text: "Taken in Middletown, CT. These birds are very cute, and they know it.",
  },
  {
    name: "Greater Roadrunner",
    src: "/birds/greater-roadrunner.jpeg",
    width: 1200,
    height: 900,
    text: "An actual dinosaur of a bird, loves creepin' around under bushes. This one was photographed in Sabino Canyon, AZ.",
  },
  {
    name: "Greater Yellowlegs",
    src: "/birds/greater-yellowlegs.jpeg",
    width: 1200,
    height: 900,
    text: "Beautiful shorebird! Gets its name from its yellow legs. Taken at the Audobon society in Eastham, MA.",
  },
  {
    name: "Hermit Thrush",
    src: "/birds/hermit-thrush.jpeg",
    width: 1200,
    height: 900,
    text: "Hermit Thrushes have this call that sounds like they are singing into a microphone with the echo effect turned on. Awesome to hear one in a rocky canyon or valley while you hike. This one was from Casper, WY.",
  },
  {
    name: "House Finch",
    src: "/birds/house-finch.jpeg",
    width: 1200,
    height: 900,
    text: "House Finches are way common in cities and suburbs around all kinds of human structures. They are invasive in most places they exist in North America -- but they apparently are native to the southwest. They can be brown or red. ",
  },
  {
    name: "Killdeer",
    src: "/birds/killdeer.jpeg",
    width: 1200,
    height: 900,
    text: "The facial expressions and movements of these birds embody pure anxiety. At no point in its life does a Killdeer ever appear relaxed. This one was pacing back and forth and hiding in a rocky riverbed at Teddy Roosevelt National Park in ND.",
  },
  {
    name: "Lazuli Bunting",
    src: "/birds/lazuli-bunting.jpeg",
    width: 1200,
    height: 900,
    text: "Photographed in the northern unit of Teddy Roosevelt National Park in ND.",
  },
  {
    name: "Mountain Bluebird",
    src: "/birds/mountain-bluebird.jpeg",
    width: 1200,
    height: 900,
    text: "One of my all time favorites. Like the Eastern Bluebird, but more regal.",
  },
  {
    name: "Northern Mockingbird",
    src: "/birds/northern-mockingbird.jpeg",
    width: 1200,
    height: 900,
    text: "Did not really get to listen to this mockingbird, who was jumping around on cactuses in Saguaro National Park. I assume he imitates other birds?",
  },
  {
    name: "Phainopepla",
    src: "/birds/phainopepla.jpeg",
    width: 1200,
    height: 900,
    text: "Yep, fain-oh-pepla is actually how you pronounce it. Saw this bird on Halloween, no joke. Scary stuff.",
  },
  {
    name: "Red-Bellied Woodpecker",
    src: "/birds/red-bellied-woodpecker.jpeg",
    width: 1200,
    height: 900,
    text: "One of the first birds that I photographed, in a pine tree in Brewster, MA.",
  },
  {
    name: "Says Phoebe",
    src: "/birds/says-phoebe.jpeg",
    width: 1200,
    height: 900,
    text: "95% sure this is a Says Phoebe. From Casper, WY. This one is posing for its senior yearbook picture.",
  },
  {
    name: "Squirrel",
    src: "/birds/squirrel.jpeg",
    width: 1200,
    height: 900,
    text: "Not a bird at all. Allowed in this list because of how cute it is.",
  },
  {
    name: "Western Kingbird",
    src: "/birds/western-kingbird.jpeg",
    width: 1200,
    height: 900,
    text: "The Eastern Kingbird is black and white, but apparently the Western Kingbird is mostly yellow. This one lives in North Dakota.",
  },
  {
    name: "Western Meadowlark",
    src: "/birds/western-meadowlark.jpeg",
    width: 1200,
    height: 900,
    text: "This Western Meadowlark is from Badlands National Park in SD. He leaves his mouth open on hot days to stay cooler. More than a few states consider this to be their state bird.",
  },
  {
    name: "Yellow-rumped Warbler",
    src: "/birds/yellow-rumped-warbler.jpeg",
    width: 1200,
    height: 900,
    text: "In my experience, the most common warbler you see traveling around the US. As shown here, warblers eat bugs, and I think that's why they are migratory birds. For the yellow-rumped, the yellow on their butt is actually hard to see - I look instead for the yellow on their head and sides.",
  },
];

export default function Birds() {
  return (
    <section>
      <Carousel slides={birds} />
    </section>
  );
}
