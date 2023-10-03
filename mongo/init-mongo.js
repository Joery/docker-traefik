db.getSiblingDB("unifi").createUser({user: "unifi", pwd: "xxx", roles: [{role: "dbOwner", db: "unifi"}, {role: "dbOwner", db: "unifi_stat"}]});
