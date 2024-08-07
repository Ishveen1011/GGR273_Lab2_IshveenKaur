var wms_layers = [];

var format_Alberta_0 = new ol.format.GeoJSON();
var features_Alberta_0 = format_Alberta_0.readFeatures(json_Alberta_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Alberta_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Alberta_0.addFeatures(features_Alberta_0);
var lyr_Alberta_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Alberta_0, 
                style: style_Alberta_0,
                popuplayertitle: "Alberta",
                interactive: false,
                title: '<img src="styles/legend/Alberta_0.png" /> Alberta'
            });
var format_Water_1 = new ol.format.GeoJSON();
var features_Water_1 = format_Water_1.readFeatures(json_Water_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Water_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Water_1.addFeatures(features_Water_1);
var lyr_Water_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Water_1, 
                style: style_Water_1,
                popuplayertitle: "Water",
                interactive: false,
                title: '<img src="styles/legend/Water_1.png" /> Water'
            });
var format_FishStockingLocations2024_2 = new ol.format.GeoJSON();
var features_FishStockingLocations2024_2 = format_FishStockingLocations2024_2.readFeatures(json_FishStockingLocations2024_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FishStockingLocations2024_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FishStockingLocations2024_2.addFeatures(features_FishStockingLocations2024_2);
var lyr_FishStockingLocations2024_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FishStockingLocations2024_2, 
                style: style_FishStockingLocations2024_2,
                popuplayertitle: "Fish Stocking Locations (2024)",
                interactive: true,
    title: 'Fish Stocking Locations (2024)<br />\
    <img src="styles/legend/FishStockingLocations2024_2_0.png" /> 0 - 813<br />\
    <img src="styles/legend/FishStockingLocations2024_2_1.png" /> 813 - 2200<br />\
    <img src="styles/legend/FishStockingLocations2024_2_2.png" /> 2200 - 3800<br />\
    <img src="styles/legend/FishStockingLocations2024_2_3.png" /> 3800 - 6400<br />\
    <img src="styles/legend/FishStockingLocations2024_2_4.png" /> 6400 - 11500<br />\
    <img src="styles/legend/FishStockingLocations2024_2_5.png" /> 11500 - 15000<br />\
    <img src="styles/legend/FishStockingLocations2024_2_6.png" /> 15000 - 25000<br />\
    <img src="styles/legend/FishStockingLocations2024_2_7.png" /> 25000 - 40000<br />\
    <img src="styles/legend/FishStockingLocations2024_2_8.png" /> 40000 - 110000<br />\
    <img src="styles/legend/FishStockingLocations2024_2_9.png" /> 110000 - 1613075<br />'
        });

lyr_Alberta_0.setVisible(true);lyr_Water_1.setVisible(true);lyr_FishStockingLocations2024_2.setVisible(true);
var layersList = [lyr_Alberta_0,lyr_Water_1,lyr_FishStockingLocations2024_2];
lyr_Alberta_0.set('fieldAliases', {'PRUID': 'PRUID', 'DGUID': 'DGUID', 'PRNAME': 'PRNAME', 'PRENAME': 'PRENAME', 'PRFNAME': 'PRFNAME', 'PREABBR': 'PREABBR', 'PRFABBR': 'PRFABBR', 'LANDAREA': 'LANDAREA', });
lyr_Water_1.set('fieldAliases', {'HYDROUID': 'HYDROUID', 'NAME': 'NAME', 'RANK': 'RANK', 'PRUID': 'PRUID', });
lyr_FishStockingLocations2024_2.set('fieldAliases', {'DISTRICT': 'DISTRICT', 'WATERBODY': 'WATERBODY', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'SPECIES': 'SPECIES', 'GENOTYPE': 'GENOTYPE', 'STOCKED -': 'STOCKED -', 'STOCKING N': 'STOCKING N', 'PLANNED ST': 'PLANNED ST', 'Map Author': 'Map Author', 'FshStckNum': 'FshStckNum', });
lyr_Alberta_0.set('fieldImages', {'PRUID': 'TextEdit', 'DGUID': 'TextEdit', 'PRNAME': 'TextEdit', 'PRENAME': 'TextEdit', 'PRFNAME': 'TextEdit', 'PREABBR': 'TextEdit', 'PRFABBR': 'TextEdit', 'LANDAREA': 'TextEdit', });
lyr_Water_1.set('fieldImages', {'HYDROUID': 'TextEdit', 'NAME': 'TextEdit', 'RANK': 'Range', 'PRUID': 'TextEdit', });
lyr_FishStockingLocations2024_2.set('fieldImages', {'DISTRICT': 'TextEdit', 'WATERBODY': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'SPECIES': 'TextEdit', 'GENOTYPE': 'TextEdit', 'STOCKED -': 'TextEdit', 'STOCKING N': 'TextEdit', 'PLANNED ST': 'TextEdit', 'Map Author': 'TextEdit', 'FshStckNum': 'Range', });
lyr_Alberta_0.set('fieldLabels', {'PRUID': 'header label - visible with data', 'DGUID': 'no label', 'PRNAME': 'no label', 'PRENAME': 'no label', 'PRFNAME': 'no label', 'PREABBR': 'no label', 'PRFABBR': 'no label', 'LANDAREA': 'no label', });
lyr_Water_1.set('fieldLabels', {'HYDROUID': 'header label - visible with data', 'NAME': 'no label', 'RANK': 'no label', 'PRUID': 'no label', });
lyr_FishStockingLocations2024_2.set('fieldLabels', {'DISTRICT': 'inline label - visible with data', 'WATERBODY': 'inline label - visible with data', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'SPECIES': 'inline label - visible with data', 'GENOTYPE': 'inline label - visible with data', 'STOCKED -': 'hidden field', 'STOCKING N': 'hidden field', 'PLANNED ST': 'inline label - visible with data', 'Map Author': 'header label - always visible', 'FshStckNum': 'inline label - always visible', });
lyr_FishStockingLocations2024_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});