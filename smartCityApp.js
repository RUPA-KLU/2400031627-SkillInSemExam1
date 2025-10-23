// smartCityApp.js

const cityServices = [
  { id: 1, name: "Water Supply", status: "Working", description: "Water available in all areas." },
  { id: 2, name: "Waste Management", status: "Delayed", description: "Garbage pickup delayed in Zone 3." },
];

function showServices() {
  console.log("City Services:");
  cityServices.forEach(s => console.log(`${s.id}. ${s.name} - ${s.status}: ${s.description}`));
}

function reportIssue(serviceId, issue) {
  const service = cityServices.find(s => s.id === serviceId);
  if (service) {
    service.status = "Issue reported";
    service.description = issue;
    console.log(`Issue reported for ${service.name}: ${issue}`);
  } else {
    console.log("Service not found");
  }
}

function updateStatus(serviceId, newStatus) {
  const service = cityServices.find(s => s.id === serviceId);
  if (service) {
    service.status = newStatus;
    console.log(`Updated status of ${service.name} to ${newStatus}`);
  } else {
    console.log("Service not found");
  }
}

// Demo user interaction
console.log("\nCitizen reports an issue:");
reportIssue(1, "Water leakage near Main St.");

console.log("\nAdmin updates status:");
updateStatus(2, "On track");

console.log("\nCurrent services status:");
showServices();
