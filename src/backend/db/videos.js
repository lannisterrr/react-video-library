/**
 * Videos Database can be added here.
 * You can add videos of your wish with different attributes
 * */
import { v4 as uuid } from 'uuid';

export const videos = [
  {
    _id: uuid(),
    categoryName: 'Neuroscience',
    creator: 'Rich Roll',
    creatorLogo: {
      altText: 'Rich Roll Logo',
      url: 'https://yt3.ggpht.com/UXI7ZyoQPoHhboBBUD8pscuva2dd-hlTxMjRDHVg96eoHOfiru5CFoWvkVe8pFiyvlB33_ceow=s88-c-k-c0x00ffffff-no-rj',
    },
    isInWatchLater: false,
    isLiked: false,
    thumbnail: {
      altText:
        'Change Your Brain: Neuroscientist Dr. Andrew Huberman Thumbnail',
      url: 'http://i3.ytimg.com/vi/SwQhKFMxmDY/hqdefault.jpg',
    },
    title:
      'Change Your Brain: Neuroscientist Dr. Andrew Huberman | Rich Roll Podcast',
    description:
      'Dr. Huberman is here to school us on all things neuroplasticity---and how we can use it to our advantage through intense focus, mindfulness, and restorative sleep. Enjoy!',
    videoYTId: 'SwQhKFMxmDY',
  },

  {
    _id: uuid(),
    categoryName: 'Neuroscience',
    creator: 'Andrew Huberman',
    creatorLogo: {
      altText: 'Andrew Huberman Logo',
      url: 'https://yt3.ggpht.com/5ONImZvpa9_hYK12Xek2E2JLzRc732DWsZMX2F-AZ1cTutTQLBuAmcEtFwrCgypqJncl5HrV2w=s88-c-k-c0x00ffffff-no-rj',
    },
    isInWatchLater: false,
    isLiked: false,
    thumbnail: {
      altText:
        'How Your Nervous System Works & Changes | Huberman Lab Podcast #1 Thumbnail',
      url: 'http://i3.ytimg.com/vi/H-XfCl-HpRM/hqdefault.jpg',
    },
    title: 'How Your Nervous System Works & Changes | Huberman Lab Podcast #1',
    description:
      'Today’s episode provides an introduction to how the nervous system works to create sensations, perceptions, emotions, thoughts and behaviors, as well as how we can change our nervous system— a phenomenon known as neuroplasticity.  ',
    videoYTId: 'H-XfCl-HpRM',
  },

  {
    _id: uuid(),
    categoryName: 'Neuroscience',
    creator: 'WIRED',
    creatorLogo: {
      altText: 'WIRED Logo',
      url: 'https://yt3.ggpht.com/ytc/AKedOLT1ZPXzhEYhBxuN9V_pxPkPiTdH-JhxujfV1HKGTAQ=s88-c-k-c0x00ffffff-no-rj',
    },
    isInWatchLater: false,
    isLiked: false,
    thumbnail: {
      altText:
        'Neuroscientist Explains One Concept in 5 Levels of Difficulty | WIRED Thumbnail',
      url: 'http://i3.ytimg.com/vi/opqIa5Jiwuw/hqdefault.jpg',
    },
    title:
      'Neuroscientist Explains One Concept in 5 Levels of Difficulty | WIRED',
    description:
      'WIRED has challenged neuroscientist Bobby Kasthuri to explain this scientific concept to 5 different people; ',
    videoYTId: 'opqIa5Jiwuw',
  },

  {
    _id: uuid(),
    categoryName: 'Neuroscience',
    creator: 'Andrew Huberman',
    creatorLogo: {
      altText: 'Andrew Huberman Logo',
      url: 'https://yt3.ggpht.com/5ONImZvpa9_hYK12Xek2E2JLzRc732DWsZMX2F-AZ1cTutTQLBuAmcEtFwrCgypqJncl5HrV2w=s88-c-k-c0x00ffffff-no-rj',
    },
    isInWatchLater: false,
    isLiked: false,
    thumbnail: {
      altText:
        'Controlling Your Dopamine For Motivation, Focus & Satisfaction | Huberman Lab Podcast #39 Thumbnail',
      url: 'http://i3.ytimg.com/vi/QmOF0crdyRU/hqdefault.jpg',
    },
    title:
      'Controlling Your Dopamine For Motivation, Focus & Satisfaction | Huberman Lab Podcast #39',
    description:
      'This episode serves as a sort of “Dopamine Masterclass”. I discuss the immensely powerful chemical that we all make in our brain and body: dopamine. I describe what it does and the neural circuits involved.',
    videoYTId: 'QmOF0crdyRU',
  },

  {
    _id: uuid(),
    categoryName: 'Developmental',
    creator: 'Jordan B Peterson',
    creatorLogo: {
      altText: 'Jordan B Peterson Logo',
      url: 'https://yt3.ggpht.com/aoJ9M6s2RCOH9-ULFs7ll9aS-viz4wj84VgdGmyJSkPdPySIZggg2nwyt5YGlLnfE5DTzt3J34s=s88-c-k-c0x00ffffff-no-rj',
    },

    isInWatchLater: false,
    isLiked: false,
    thumbnail: {
      altText:
        '2017 Personality 09: Freud and the Dynamic Unconscious Thumbnail',
      url: 'http://i3.ytimg.com/vi/YFWLwYyrMRE/hqdefault.jpg',
    },
    title: '2017 Personality 09: Freud and the Dynamic Unconscious',
    description:
      "In this lecture, 9th in the 2017 series, I discuss some of the essential of Sigmund Freud's theories, concentrating on his conceptualizations of the dynamic (living) unconscious. ",
    videoYTId: 'YFWLwYyrMRE',
  },

  {
    _id: uuid(),
    categoryName: 'Developmental',
    creator: 'R. J. Birmingham',
    creatorLogo: {
      altText: 'R. J. Birmingham Logo',
      url: 'https://yt3.ggpht.com/ytc/AKedOLT7srSUrTXvtIuWhzUbGxC3l8PJduNwERDM4AP7=s88-c-k-c0x00ffffff-no-rj',
    },
    isInWatchLater: false,
    isLiked: false,
    thumbnail: {
      altText: 'Developmental Psychology - Human Development - CH1 Thumbnail',
      url: 'http://i3.ytimg.com/vi/ukntjd7iOS8/hqdefault.jpg',
    },
    title: 'Developmental Psychology - Human Development - CH1',
    description:
      'This lecture was created for Developmental Psychology course.  It is based off the material from a popular college textbook (copywrite - can’t say which one) used in my course.  The specific class is DEP2004 - Lifespan Development - Chapter 1 ',
    videoYTId: 'ukntjd7iOS8',
  },

  {
    _id: uuid(),
    categoryName: 'Cognitive',
    creator: 'Psychology Unlocked',
    creatorLogo: {
      altText: 'Psychology Unlocked Logo',
      url: 'https://yt3.ggpht.com/lzGyqJBtyib7vgX4da8mSr1lBWIB7zGlKvUTE6MWOF138Wo-YR68rv2qJotemUw1HdNSXxUksw=s88-c-k-c0x00ffffff-no-rj',
    },
    isInWatchLater: false,
    isLiked: false,
    thumbnail: {
      altText:
        'Cognitive Psychology explained in less than 5 minutes Thumbnail',
      url: 'http://i3.ytimg.com/vi/VcaAVWtP48A/hqdefault.jpg',
    },
    title: 'Cognitive Psychology explained in less than 5 minutes',
    description:
      'In the middle of the 20th Century, Psychology transformed thanks to the Cognitive Revolution. So what is Cognitive Psychology, and what is its story from the 1960s to today?',
    videoYTId: 'VcaAVWtP48A',
  },

  {
    _id: uuid(),
    categoryName: 'Social',
    creator: 'Frank M. LoSchiavo',
    creatorLogo: {
      altText: 'Frank M. LoSchiavo Logo',
      url: 'https://yt3.ggpht.com/ytc/AKedOLRgYNCjmTRHKC8hnZn0fBa6_QCWoi8hhgZLmKRN6w=s88-c-k-c0x00ffffff-no-rj',
    },
    isInWatchLater: false,
    isLiked: false,
    thumbnail: {
      altText:
        'PSY 2510 Social Psychology: What is social psychology? Thumbnail',
      url: 'http://i3.ytimg.com/vi/yv8qZ0AXx9Q/hqdefault.jpg',
    },
    title: 'PSY 2510 Social Psychology: What is social psychology?',
    description:
      'This video defines social psychology and  distinguishes it from other subfields within  psychology and from sociology.',
    videoYTId: 'yv8qZ0AXx9Q',
  },

  {
    _id: uuid(),
    categoryName: 'Cognitive',
    creator: 'Jordan B Peterson',
    creatorLogo: {
      altText: 'Jordan B Peterson Logo',
      url: 'https://yt3.ggpht.com/aoJ9M6s2RCOH9-ULFs7ll9aS-viz4wj84VgdGmyJSkPdPySIZggg2nwyt5YGlLnfE5DTzt3J34s=s88-c-k-c0x00ffffff-no-rj',
    },
    isInWatchLater: false,
    isLiked: false,
    thumbnail: {
      altText:
        '2017 Personality 06: Jean Piaget & Constructivism - CH1 Thumbnail',
      url: 'http://i3.ytimg.com/vi/BQ4VSRg4e8w/hqdefault.jpg',
    },
    title: '2017 Personality 06: Jean Piaget & Constructivism - CH1',
    description:
      'In this lecture, I talk about the great developmental psychologist Jean Piaget, who was interested, above all, in the way that knowledge is generated and transforms. His analysis of the development of morality in children, which relates early play to social cooperation and competition,  is particularly profound. ',
    videoYTId: 'BQ4VSRg4e8w',
  },

  {
    _id: uuid(),
    categoryName: 'Clinical',
    creator: 'Talks at Google',
    creatorLogo: {
      altText: 'Talks at Google Logo',
      url: 'https://yt3.ggpht.com/ytc/AKedOLQDTf95gNBGbmSrs0I54WEsOqOw9oddIblPuQnj1w=s88-c-k-c0x00ffffff-no-rj',
    },
    isInWatchLater: false,
    isLiked: false,
    thumbnail: {
      altText:
        'Clinical Psychology: A Very Short Introduction | Susan Llewelyn | Talks at Google Thumbnail',
      url: 'http://i3.ytimg.com/vi/VpmB9C01qLY/hqdefault.jpg',
    },
    title:
      'Clinical Psychology: A Very Short Introduction | Susan Llewelyn | Talks at Google',
    description:
      'Oxford Professor of Clinical Psychology, Susan Llewelyn gives an insight into the world of clinical psychologists and their patients.',
    videoYTId: 'VpmB9C01qLY',
  },

  {
    _id: uuid(),
    categoryName: 'Clinical',
    creator: 'Judith Johnson',
    creatorLogo: {
      altText: 'Judith Johnson Logo',
      url: 'https://yt3.ggpht.com/WnTcZASHvf62p4Mlo9vKBo6v8GKM5ewwdxVUNDsBPU4OaKpFtzWUxNDKIRqDSHOdHcsdih7TJw=s88-c-k-c0x00ffffff-no-rj',
    },
    isInWatchLater: false,
    isLiked: false,
    thumbnail: {
      altText:
        'Case study clinical example CBT: First session with a client with symptoms of depression (CBT model) Thumbnail',
      url: 'http://i3.ytimg.com/vi/7LD8iC4NqXM/hqdefault.jpg',
    },
    title:
      'Case study clinical example CBT: First session with a client with symptoms of depression (CBT model)',
    description:
      'Case study example for use in teaching, aiming to demonstrate some of the triggers, thoughts, feelings and responses linked with problematic low mood.',
    videoYTId: '7LD8iC4NqXM',
  },

  {
    _id: uuid(),
    categoryName: 'Cognitive',
    creator: 'MedCircle',
    creatorLogo: {
      altText: 'MedCircle Logo',
      url: 'https://yt3.ggpht.com/PpFUz6yXZoGtI4NMosmzQ-6MzYbmmLwbCPhnd6u2aqs74pIiF3bjSBB_pW-lrYsF7LhswgVdrQ=s88-c-k-c0x00ffffff-no-rj',
    },
    isInWatchLater: false,
    isLiked: false,
    thumbnail: {
      altText:
        'What a Cognitive Behavioral Therapy (CBT) Session Looks Like Thumbnail',
      url: 'http://i3.ytimg.com/vi/8-2WQF3SWwo/hqdefault.jpg',
    },
    title: 'What a Cognitive Behavioral Therapy (CBT) Session Looks Like',
    description:
      'In our MedCircle series on cognitive behavioral therapy (CBT), Dr. Judy Ho and Kyle sat down to discuss how the therapy works and how it changes your thoughts, your emotions, and ultimately, your behaviors.',
    videoYTId: '8-2WQF3SWwo',
  },
];
