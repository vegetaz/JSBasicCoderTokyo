var age = 16;
var canDrive;

/**
 * Chuyển đổi đoạn code dưới đây dùng ternary operator mà không làm thay đổi logic
 * if (age > 16) {
 *      canDrive = 'yes';
 * } else {
 *      canDrive = 'no';
 * }
 */

// Viết lại ở đây
canDrive = (age > 16) ? 'yes' : 'no';

console.log('Can driver?', canDrive);