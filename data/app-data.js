export const appData = {
  store: {
    number: "129",
    district: "2",
    division: "620",
    status: "Operational",
  },

  metrics: {
    executive: {
      storeHealth: "94%",
      missionCompletion: "91%",
      alerts: "7",
      maximo: "5",
    },

    analytics: {
      salesTrend: "+3.4%",
      shrinkRisk: "Medium",
      laborEfficiency: "101.6%",
      foodSafety: "96%",
    },

    scorecard: {
      compositeScore: "94%",
      departmentExecution: "91%",
      associateReadiness: "88%",
      customerImpact: "95%",
    },
  },

  missions: [
    {
      title: "Verify Deli temperature validation",
      owner: "Alex",
      leader: "Jamie",
      status: "Due Today",
      priority: "High",
    },
    {
      title: "Review Deli labor exemptions",
      owner: "Jamie",
      leader: "Joey",
      status: "Due Today",
      priority: "Medium",
    },
    {
      title: "Complete cooler/freezer audit",
      owner: "Department Leader",
      leader: "Store Leader",
      status: "Open",
      priority: "Medium",
    },
  ],

  alerts: [
    {
      title: "Temperature validation required",
      department: "Deli",
      count: 2,
      severity: "High",
    },
    {
      title: "Maximo work orders pending",
      department: "Maintenance",
      count: 5,
      severity: "Medium",
    },
    {
      title: "Store execution follow-up",
      department: "Operations",
      count: 7,
      severity: "Medium",
    },
  ],
};
