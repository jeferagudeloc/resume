const CHART_OPTIONS_FRONT = {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: "bar",
    height: 200,
    backgroundColor: "rgba(0,0,0,0)",
  },
  credits: {
    enabled: false,
  },
  legend: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  title: {
    text: null,
    enabled: false,
  },
  xAxis: {
    title: {
      enabled: false,
    },
    categories: ["nuxtjs", "reactjs", "angularjs", "angular", "vuejs", "vuex", "redux", "cypress"],
  },
  yAxis: {
    opposite: true,
    max: 5,
    title: {
      enabled: true,
      text: "Expertise",
      margin: 20,
    },
    categories: [
      "-",
      "BEGINNER",
      "ELEMENTARY",
      "INTERMEDIATE",
      "ADVANCED",
      "EXPERT",
    ],
  },
  series: [
    {
      color: "rgb(64 64 64 / 1)",
      data: [
        {
          name: "nuxtjs",
          y: 5,
        },
        {
          name: "reactjs",
          y: 3,
        },
        {
          name: "angularjs",
          y: 5,
        },
        {
          name: "angular",
          y: 4,
        },
        {
          name: "vuejs",
          y: 5,
        },
        {
          name: "vuex",
          y: 4,
        },
        {
          name: "vuex",
          y: 3,
        },
        {
          name: "cypress",
          y: 4,
        },
      ],
    },
  ],
};

const CHART_OPTIONS_BACK = {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: "bar",
    height: 200,
    backgroundColor: "rgba(0,0,0,0)",
  },
  credits: {
    enabled: false,
  },
  legend: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  title: {
    text: null,
    enabled: false,
  },
  xAxis: {
    title: {
      enabled: false,
    },

    categories: [
      "spring boot",
      "golang",
      "nestjs",
      "csharp",
      "python",
      "android",
      "serverless",
      "bash",
    ],
  },
  yAxis: {
    opposite: true,
    max: 5,
    title: {
      enabled: true,
      text: "Expertise",
      margin: 20,
    },
    categories: [
      "-",
      "BEGINNER",
      "ELEMENTARY",
      "INTERMEDIATE",
      "ADVANCED",
      "EXPERT",
    ],
  },
  series: [
    {
      color: "rgb(64 64 64 / 1)",
      data: [
        {
          name: "spring boot",
          y: 4,
        },
        {
          name: "golang",
          y: 3,
        },
        {
          name: "nestjs",
          y: 5,
        },
        {
          name: "csharp",
          y: 3,
        },
        {
          name: "pyhton",
          y: 3,
        },
        {
          name: "android",
          y: 3,
        },
        {
          name: "serverless",
          y: 4,
        },
        {
          name: "bash",
          y: 2,
        },
      ],
    },
  ],
};

const CHART_OPTIONS_CLOUD = {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: "bar",
    backgroundColor: "rgba(0,0,0,0)",
  },
  credits: {
    enabled: false,
  },
  legend: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  title: {
    text: null,
    enabled: false,
  },
  xAxis: {
    title: {
      enabled: false,
    },

    categories: [
      "aws api gateway",
      "aws cloudfront",
      "aws ec2",
      "aws c3",
      "aws sqs",
      "aws sns",
      "google pub/sub",
      "google cloud storage",
      "google firestore",
      "google gke",
      "terraform",
      "terragrunt"
    ],
  },
  yAxis: {
    opposite: true,
    title: {
      enabled: true,
      text: "Expertise",
      margin: 20,
    },
    max: 5,
    categories: [
      "-",
      "BEGINNER",
      "ELEMENTARY",
      "INTERMEDIATE",
      "ADVANCED",
      "EXPERT",
    ],
  },
  series: [
    {
      color: "rgb(64 64 64 / 1)",
      data: [
        {
          name: "aws api gateway",
          y: 4,
        },
        {
          name: "aws cloudfront",
          y: 4,
        },
        {
          name: "aws ec2",
          y: 3,
        },
        {
          name: "aws c3",
          y: 4,
        },
        {
          name: "aws sqs",
          y: 4,
        },
        {
          name: "aws sns",
          y: 4,
        },
        {
          name: "google pub/sub",
          y: 3,
        },
        {
          name: "google cloud storage",
          y: 3,
        },
        {
          name: "google firestore",
          y: 3,
        },
        {
          name: "google gke",
          y: 1,
        },
        {
          name: "terraform",
          y: 3,
        },
        {
          name: "terragrunt",
          y: 3,
        },
      ],
    },
  ],
};



const CHART_OPTIONS_TOOLS = {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: "bar",
    backgroundColor: "rgba(0,0,0,0)",
  },
  credits: {
    enabled: false,
  },
  legend: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  title: {
    text: null,
    enabled: false,
  },
  xAxis: {
    title: {
      enabled: false,
    },

    categories: [
      "git",
      "terraform",
      "docker",
      "postman",
      "jira",
      "nginx",
      "androidstudio",
      "xcode",
      "figma",
      "gradle"
    ],
  },
  yAxis: {
    opposite: true,
    title: {
      enabled: true,
      text: "Expertise",
      margin: 20,
    },
    max: 5,
    categories: [
      "-",
      "BEGINNER",
      "ELEMENTARY",
      "INTERMEDIATE",
      "ADVANCED",
      "EXPERT",
    ],
  },
  series: [
    {
      color: "rgb(64 64 64 / 1)",
      data: [
        {
          name: "git",
          y: 4,
        },
        {
          name: "terraform",
          y: 3,
        },
        {
          name: "docker",
          y: 4,
        },
        {
          name: "postman",
          y: 4,
        },
        {
          name: "jira",
          y: 3,
        },
        {
          name: "nginx",
          y: 4,
        },
        {
          name: "androidstudio",
          y: 3,
        },
        {
          name: "xcode",
          y: 2,
        },
        {
          name: "figma",
          y: 2,
        },
        {
          name: "gradle",
          y: 4,
        },
      ],
    },
  ],
};

export { CHART_OPTIONS_FRONT, CHART_OPTIONS_BACK, CHART_OPTIONS_CLOUD, CHART_OPTIONS_TOOLS };
