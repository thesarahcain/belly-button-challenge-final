// Fetch data and initialize the dashboard
function init() {
    d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json").then(function (data) {
      console.log(data);
  
      // Populate dropdown menu with sample IDs
      let selector = d3.select("#selDataset");
      data.names.forEach(function (sample) {
        let option = selector.append("option");
        option.text(sample);
        option.property("value", sample);
      });
  
      // Select the first sample from the dropdown menu
      const firstSample = data.names[0];
      updateCharts(firstSample, data);
    });
  }
  
  // Update charts and metadata based on selected sample
  function updateCharts(sample, data) {
    let selectedSample = data.samples.filter(obj => obj.id === sample)[0];
    let selectedMetadata = data.metadata.filter(obj => obj.id === Number(sample))[0];
  
    // Update bar chart
    let topSampleValues = selectedSample.sample_values.slice(0, 10).reverse();
    let topOtuIds = selectedSample.otu_ids.slice(0, 10).map(id => `OTU ${id}`).reverse();
    let topOtuLabels = selectedSample.otu_labels.slice(0, 10).reverse();
    let barTrace = {
      x: topSampleValues,
      y: topOtuIds,
      text: topOtuLabels,
      type: 'bar',
      orientation: 'h'
    };
    let barLayout = { title: 'Top 10 OTUs' };
    Plotly.newPlot('bar', [barTrace], barLayout);
  
    // Update bubble chart
    let bubbleTrace = {
      x: selectedSample.otu_ids,
      y: selectedSample.sample_values,
      text: selectedSample.otu_labels,
      mode: 'markers',
      marker: {
        size: selectedSample.sample_values,
        color: selectedSample.otu_ids,
        colorscale: 'Earth'
      }
    };
    let bubbleLayout = {
      title: 'Bacteria Per Sample',
      xaxis: { title: 'OTU ID' }
    };
    Plotly.newPlot('bubble', [bubbleTrace], bubbleLayout);
  
    // Update gauge chart
    let gaugeTrace = {
      type: 'indicator',
      mode: 'gauge+number',
      value: selectedMetadata.wfreq,
      title: { text: 'Belly Button Washing Frequency<br>Scrubs per Week' },
      gauge: {
        axis: { range: [null, 9], tickwidth: 1, tickcolor: 'darkblue' },
        bar: { color: 'red' },
        bgcolor: 'white',
        steps: [
          { range: [0, 1], color: 'rgba(248, 243, 236, 1)' },
          { range: [1, 2], color: 'rgba(244, 241, 229, 1)' },
          { range: [2, 3], color: 'rgba(233, 230, 202, 1)' },
          { range: [3, 4], color: 'rgba(229, 231, 179, 1)' },
          { range: [4, 5], color: 'rgba(213, 228, 157, 1)' },
          { range: [5, 6], color: 'rgba(183, 204, 146, 1)' },
          { range: [6, 7], color: 'rgba(140, 191, 136, 1)' },
          { range: [7, 8], color: 'rgba(138, 187, 143, 1)' },
          { range: [8, 9], color: 'rgba(133, 180, 138, 1)' }
        ]
      }
    };
    let gaugeLayout = { title: 'Belly Button Washing Frequency' };
    Plotly.newPlot('gauge', [gaugeTrace], gaugeLayout);
  
    // Update metadata display
    let metadataPanel = d3.select("#sample-metadata");
    metadataPanel.html("");
    Object.entries(selectedMetadata).forEach(([key, value]) => {
      metadataPanel.append("h6").text(`${key.toUpperCase()}: ${value}`);
    });
  }
  
  // Event listener for dropdown menu change
  function optionChanged(id) {
    d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json").then(function (data) {
      updateCharts(id, data);
    });
  }
  
  // Initialize the dashboard
  init();