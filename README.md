# Belly Button Biodiversity Dashboard

## Background
In this assignment, you will build an interactive dashboard to explore the Belly Button Biodiversity dataset, which catalogs the microbes that colonize human navels.

The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

## Before You Begin
1. Create a new repository for this project called **belly-button-challenge**. Do not add this Challenge to an existing repository.
2. Clone the new repository to your computer.
3. Inside your local git repository, copy the files from in the StarterCode folder contained within the Module 14 Challenge zip file. i.e. index.html, samples.json, and the static folder.
   - *NOTE*: You will not be required to access the samples.json file locally, but it is provided for reference.
4. Push the above changes to GitHub.
5. Deploy the new repository to GitHub Pages.

## Files
Download the following files to help you get started:
- [Module 14 Challenge files](https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json)

## Instructions
Complete the following steps:
1. Use the D3 library to read in samples.json from the URL provided.
2. Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
   - Use sample_values as the values for the bar chart.
   - Use otu_ids as the labels for the bar chart.
   - Use otu_labels as the hovertext for the chart.
3. Create a bubble chart that displays each sample.
   - Use otu_ids for the x values.
   - Use sample_values for the y values.
   - Use sample_values for the marker size.
   - Use otu_ids for the marker colors.
   - Use otu_labels for the text values.
4. Display the sample metadata, i.e., an individual's demographic information.
   - Display each key-value pair from the metadata JSON object somewhere on the page.
5. Update all the plots when a new sample is selected. Additionally, you are welcome to create any layout that you would like for your dashboard.

## Deployment
- Deploy your app to a free static page hosting service, such as GitHub Pages.
- Submit the links to your deployment and your GitHub repo.
- Ensure that your repository has regular commits and a thorough README.md file.

## Resources
I utilized ChatGPT and the following resources to help write my code: 
Help with the html code: https://www.w3schools.com/html/
Help with the bubble chart: https://www.anychart.com/blog/2023/08/01/bubble-chart-js/
Help with GitHub Pages: https://blog.logrocket.com/deploying-react-apps-github-pages/
