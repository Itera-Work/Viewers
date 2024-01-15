window.config = {
  routerBasename: '/',
  showStudyList: true,
  extensions: [],
  modes: [],
  // below flag is for performance reasons, but it might not work for all servers

  showWarningMessageForCrossOrigin: true,
  showCPUFallbackMessage: true,
  showLoadingIndicator: true,
  strictZSpacingForVolumeViewport: true,
  defaultDataSourceName: 'dicomweb',
  dataSources: [
    {
      namespace: '@ohif/extension-default.dataSourcesModule.dicomweb',
      sourceName: 'dicomweb',
      configuration: {
        friendlyName: 'Segmai Server',
        name: 'Segmai',
        wadoUriRoot: 'https://segmai.scian.cl/pacs/dicom-web',
        qidoRoot: 'https://segmai.scian.cl/pacs/dicom-web',
        wadoRoot: 'https://segmai.scian.cl/pacs/dicom-web',
        qidoSupportsIncludeField: true,
        imageRendering: 'wadors',
        thumbnailRendering: 'wadors',
        enableStudyLazyLoad: true,
        supportsFuzzyMatching: true,
        // acceptHeader: {
        //   Authorization: 'Basic ' + btoa('fondef10337:fondef10337_orthanc'),
        //   Accept: 'multipart/related; type=application/dicom; transfer-syntax=*',
        // },
        // requestOptions: {
        //   auth: 'fondef10337:fondef10337_orthanc',
        //   // auth: 'Basic ' + btoa('fondef10337:fondef10337_orthanc'),
        //   headers: {
        //     Authorization: 'Basic ' + btoa('fondef10337:fondef10337_orthanc'),
        //   },
        // },

        // authentication: {
        //   username: 'fondef10337',
        //   password: 'fondef10337_orthanc',
        // },
      },
    },
    {
      namespace: '@ohif/extension-default.dataSourcesModule.dicomjson',
      sourceName: 'dicomjson',
      configuration: {
        friendlyName: 'dicom json',
        name: 'json',
      },
    },
    {
      namespace: '@ohif/extension-default.dataSourcesModule.dicomlocal',
      sourceName: 'dicomlocal',
      configuration: {
        friendlyName: 'dicom local',
      },
    },
  ],
};
