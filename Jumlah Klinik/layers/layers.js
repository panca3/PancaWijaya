var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_praktekSIG2_0 = new ol.format.GeoJSON();
var features_praktekSIG2_0 = format_praktekSIG2_0.readFeatures(json_praktekSIG2_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_praktekSIG2_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_praktekSIG2_0.addFeatures(features_praktekSIG2_0);var lyr_praktekSIG2_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_praktekSIG2_0, 
                style: style_praktekSIG2_0,
    title: 'praktek SIG 2<br />\
    <img src="styles/legend/praktekSIG2_0_0.png" />  (0.0 - 5.7 ) Sedikit<br />\
    <img src="styles/legend/praktekSIG2_0_1.png" />  (5.7 - 11.3) Sedang <br />\
    <img src="styles/legend/praktekSIG2_0_2.png" />  (11.3 - 17.0) Banyak <br />'
        });

lyr_praktekSIG2_0.setVisible(true);
var layersList = [baseLayer,lyr_praktekSIG2_0];
lyr_praktekSIG2_0.set('fieldAliases', {'KECAMATAN': 'KECAMATAN', 'Klinik': 'Klinik', });
lyr_praktekSIG2_0.set('fieldImages', {'KECAMATAN': 'TextEdit', 'Klinik': 'TextEdit', });
lyr_praktekSIG2_0.set('fieldLabels', {'KECAMATAN': 'inline label', 'Klinik': 'inline label', });
lyr_praktekSIG2_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});