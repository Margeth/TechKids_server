
const AWS = require('aws-sdk')
const bucket        = 'bucket-pictures' // the bucketname without s3://
//const photo_source  = 'b.jpg'
//const photo_target  = 'c.jpg'
AWS.config.update({
    region:'us-east-1',
});

module.exports = {
      async verifSamePerson(photo_source, photo_target, result) {
      const client = new AWS.Rekognition();
      const params = {
        SourceImage: {
          S3Object: {
            Bucket: bucket,
            Name: photo_source
          },
        },
        TargetImage: {
          S3Object: {
            Bucket: bucket,
            Name: photo_target
          },
        },
        SimilarityThreshold: 85
      }
      client.compareFaces(params, 
        function(err, response) {
        if (err) {
          console.log(err, err.stack); // an error occurred
        } else {
          response.FaceMatches.forEach(data => {
            let position   = data.Face.BoundingBox
            let similarity = data.Similarity
              console.log(`The face at: ${position.Left}, ${position.Top} matches with ${similarity} % confidence`)
              if (similarity>=85){
                result [0]= true;
              }
          })
            //console.log('no hay parecido');
            //return -1;
            // for response.faceDetails
        } // if
      });
    }
}
