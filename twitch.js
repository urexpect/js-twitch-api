function getUser(username) {
return fetch(`https://api.twitch.tv/kraken/users?login=${username}`, {
    method: "GET",
    headers: {
        'Client-ID': "ymd9sjdyrpi8kz8zfxkdf5du04m649",
        "Authorization": "OAuth wukbrnwp5f6uo4barxkzfpkacyugob",
        'Accept': 'application/vnd.twitchtv.v5+json'
    }
}).then(async (res) => res.json())
};

async function follow(twitchID, number) {
return new Promise(async (resolve, reject) => {
    let done = 0
    for (var i = 0; i < number; i++) {
        let res = await sendRequest(twitchID, tokens[i]);
        done++
    }

    while (i === number) {
        return resolve(true)
    }
})

}

async function sendRequest(userid, token) {
return new Promise(async (resolve, reject) => {
    var data = `[{"operationName":"FollowButton_FollowUser","variables":{"input":{"disableNotifications":false,"targetID":"` + userid + `"}},"extensions":{"persistedQuery":{"version":1,"sha256Hash":"3efee1acda90efdff9fef6e6b4a29213be3ee490781c5b54469717b6131ffdfe"}}}]
`;

    const options = {
        url: 'https://gql.twitch.tv/gql',
        headers: {
            "Authorization": 'OAuth ' + token,
            "Client-Id": 'kimne78kx3ncx6brgo4mv6wki5h1ko',
            "Content-Type": "application/json"
        },
        body: data
    };

    request.post(options, (err, res, body) => {
        if (err) {
            return console.log(`Invalid twitch token`);
        }
        console.log(JSON.parse(body));
        resolve(true)
    });
})
}
    

function getUser(username) {
    return fetch(`https://api.twitch.tv/kraken/users?login=${username}`, {
        method: "GET",
        headers: {
            'Client-ID': "ymd9sjdyrpi8kz8zfxkdf5du04m649",
            "Authorization": "OAuth wukbrnwp5f6uo4barxkzfpkacyugob",
            'Accept': 'application/vnd.twitchtv.v5+json'
        }
    }).then(async (res) => res.json())
};

async function follow(twitchID, number) {
    return new Promise(async (resolve, reject) => {
        let done = 0
        for (var i = 0; i < number; i++) {
            let res = await sendRequest(twitchID, tokens[i]);
            done++
        }

        while (i === number) {
            return resolve(true)
        }
    })

}

async function sendRequest(userid, token) {
    return new Promise(async (resolve, reject) => {
        var data = `[{"operationName":"FollowButton_FollowUser","variables":{"input":{"disableNotifications":false,"targetID":"` + userid + `"}},"extensions":{"persistedQuery":{"version":1,"sha256Hash":"3efee1acda90efdff9fef6e6b4a29213be3ee490781c5b54469717b6131ffdfe"}}}]
    `;

        const options = {
            url: 'https://gql.twitch.tv/gql',
            headers: {
                "Authorization": 'OAuth ' + token,
                "Client-Id": 'kimne78kx3ncx6brgo4mv6wki5h1ko',
                "Content-Type": "application/json"
            },
            body: data
        };

        request.post(options, (err, res, body) => {
            if (err) {
                return console.log(`Invalid twitch token`);
            }
            console.log(JSON.parse(body));
            resolve(true)
        });
    })
