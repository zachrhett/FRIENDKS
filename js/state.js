class FriendState {

    constructor() {

        this.user = {
            name: "Alex",
            role: "Associate"
        };

        this.store = {
            number: "129",
            district: "2",
            division: "620"
        };

        this.notifications = [];

        this.currentScreen = "home";

        this.lastMission = null;

    }

    setScreen(screen){

        this.currentScreen = screen;

    }

    getScreen(){

        return this.currentScreen;

    }

    setRole(role){

        this.user.role = role;

    }

    getRole(){

        return this.user.role;

    }

    setMission(mission){

        this.lastMission = mission;

    }

    getMission(){

        return this.lastMission;

    }

}

export const friendState = new FriendState();
