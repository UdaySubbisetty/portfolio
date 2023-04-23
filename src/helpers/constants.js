class Company {
  constructor(title, location, duration, content, isInternShip = false) {
    this.title = title;
    this.location = location;
    this.duration = duration;
    this.content = content;
    this.isInternShip = isInternShip;
  }
}

class openSourceProject {
  constructor(url, gitUrl) {
    this.url = url;
    this.gitUrl = gitUrl;
  }
}
const githubLink = "https://github.com/UdaySubbisetty";
const linkedinLink = "https://www.linkedin.com/in/uday-bhaskar-23468b142";
const experienceData = [
  new Company(
    "Sr. SOFTWARE ENGINEER, TECH MAHINDRA",
    "Abu Dhabi",
    "Feb 2021 - Present",
    [
      "Designed and developed react web and cross-platform mobile applications using React,React Native and Redux",
      "Collaborated with a team of developers and designers to build and maintain the applications",
      "Improved application performance by implementing code optimizations and best practices",
    ]
  ),
  new Company(
    "MOBILE ENGINEER, DOODLEBLUE INNOVATIONS",
    "Chennai",
    "Aug 2020 - Feb 2021",
    [
      "Developed and executed mobile application testing to ensure that the software runs flawlessly on different mobile platforms",
      "Integrated third-party libraries and frameworks to add new features to the application",
    ]
  ),
  new Company(
    "SOFTWARE ENGINEER, ZIBEW DIGITAL SOLUTIONS FOR PHARMACIES",
    "Hyderabad",
    "Oct 2018 - Aug 2020",
    [
      "Designed and developed cross-platform mobile applications using React, React Native and Redux",
      "Built and maintained iOS applications using Swift and UlKit",
      "Worked with the design team to ensure consistent branding and user experience",
      "Developed custom UI components and animations to enhance the user experience",
      "Integrated third-party libraries and frameworks to add new features to the application",
    ]
  ),
  new Company(
    "IOS DEVELOPER, RUTHERFORD TECHNOLOGIES PRIVATE LIMITED",
    "Hyderabad",
    "Jun 2017 - Sep 2018",
    [
      "Built and maintained iOS applications using Swift and UlKit",
      "Worked with the design team to ensure consistent branding and user experience",
      "Developed custom UI components and animations to enhance the user experience",
      "Integrated third-party libraries and frameworks to add new features to the application",
    ]
  ),
  new Company(
    "SOFTWARE ENGINEER, ALM INTERACTIVE SOFT SOL PRIVATE LIMITED",
    "Hyderabad",
    "Dec 2016 - June 2017",
    [
      "Design and develop high-quality mobile applications for iOS devices using Objective-C programming languages.",
      "Utilize software development tools such as X code, and Cocoa Pods to build, test, and deploy iOS applications.",
      "Work with API's and web services to integrate with third-party applications and data sources.",
    ]
  ),
  new Company(
    "IOS PROGRAMMING, BRN INFOTECH",
    "Hyderabad",
    "June 2016 - Dec 2016",
    [
      "The fundamentals of iOS development, including Swift or Objective-C programming languages and the basics of X code, Apple's integrated development environment (IDE)",
      "Learned about the various iOS development frameworks, such as UlKit, Foundation, and Core Data, to build a strong foundation for mobile app development.",
      "Practice writing code and building sample iOS applications to reinforce their learning and gain hands-on experience.",
    ],
    true
  ),
];

const openSourceProjects = [
  new openSourceProject(
    require("../images/iosSample.gif"),
    "https://github.com/UdaySubbisetty/AnimatedFlatlist"
  ),
  new openSourceProject(
    "https://raw.githubusercontent.com/UdaySubbisetty/Animate-Side-Menu/main/ios.gif",
    "https://github.com/UdaySubbisetty/Animate-Side-Menu"
  ),
  new openSourceProject(
    "https://raw.githubusercontent.com/UdaySubbisetty/AnimatedFlatlist/master/womensdayNew.gif",
    "https://github.com/UdaySubbisetty/AnimatedFlatlist"
  ),
  
];

export { githubLink, linkedinLink, experienceData,openSourceProjects };
