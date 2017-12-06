      var pubKey = config.PUB_KEY;
      var subKey = config.SUB_KEY;
      var overallSentimentScore = 0;
      // Create PubNub Socket Handler
      const pubnub = new PubNub({
          publishKey   : 'empty'
      ,   ssl          : true
      ,   subscribeKey : 'sub-c-78806dd4-42a6-11e4-aed8-02ee2ddab7fe'
      });
      var session_Id = 0;

      var pubnubPersonal = new PubNub({
        publishKey: pubKey,
        subscribeKey: subKey,
      })
      // Subscribe to Twitter feed
      console.log("Subscribing to Live Twitter Stream.");
      pubnub.subscribe({ channels: ['pubnub-twitter'] });
      pubnubPersonal.subscribe({
        channels: ['sentiment-analysis']
      })

      // Add Socket Event Function Handlers
      pubnub.addListener({

        message: function(m) {
          //console.log(m);
          var msg = m.message;
          //console.log(msg);

          // We are filtering tweets based on Trump, trump, or any capitilization of POTUS
          if (sortPeople(msg)) {
            session_Id++;
            // Where we publish tweets for sentiment analysis
            var publishConfig = {
              channel : "sentiment-analysis",
              message : {"session_id":session_Id,"text":msg.text, "sentiment":msg.session_sentiment }
            }
            //console.log(msg.text);
            pubnubPersonal.publish(publishConfig, function(status, response) {
              if (status.error) {
                console.log(status, response);
              }
            })
          }
        }

      })
      pubnubPersonal.addListener({
        message: function(m) {
          //console.log(m);
          var msg = m.message;
          //console.log(msg);
          addToPerson(msg);
          processData(msg);
        }
      //     status  : statusEvent => console.log(statusEvent)
      // ,   message : message     => console.log(message)
      });
      function processData(data) {
        //console.log(data);
        // overallSentimentScore += data.score;
        document.querySelector('#feed').innerHTML ="<table><tr><td><img src='imgs/black-twitter.png' style='width:30px; vertical-align:middle;'/></td><td><p>"+ data.text+"</p></td></tr></table>";
        // document.querySelector('#sentiment-score').innerHTML = data.score;
      }