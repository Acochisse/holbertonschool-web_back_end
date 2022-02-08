import ClassRoom from './0-classroom.js';
export default function initializeRooms() {
    const rooms = [ 19, 20, 34];
    const roomArray = [];
    for (const size of rooms) {
	roomArray.push(new ClassRoom(size));
    }
    return roomArray;
}
