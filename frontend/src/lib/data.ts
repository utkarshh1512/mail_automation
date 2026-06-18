export const kpis = [
  ['Total Emails', '48,392', '+18%'], ['Auto Replies Sent', '31,882', '+24%'], ['Escalated Cases', '1,284', '-8%'],
  ['Resolution Rate', '94.6%', '+5.1%'], ['AI Accuracy', '97.2%', '+2.4%'], ['Avg Response Time', '1m 42s', '-36%'],
];
export const volume = [
  { day: 'Mon', received: 420, replied: 380, escalated: 31 }, { day: 'Tue', received: 560, replied: 501, escalated: 42 },
  { day: 'Wed', received: 610, replied: 579, escalated: 39 }, { day: 'Thu', received: 760, replied: 701, escalated: 53 },
  { day: 'Fri', received: 690, replied: 655, escalated: 44 }, { day: 'Sat', received: 430, replied: 398, escalated: 25 },
  { day: 'Sun', received: 380, replied: 352, escalated: 19 },
];
export const categories = [
  { name: 'Product', value: 33 }, { name: 'Billing', value: 21 }, { name: 'Refund', value: 18 }, { name: 'Delivery', value: 14 }, { name: 'Legal', value: 4 }, { name: 'Other', value: 10 },
];
export const sentiment = volume.map((v, i) => ({ day: v.day, angry: [20,32,28,45,31,18,12][i], frustrated: [76,81,88,94,73,39,36][i], happy: [140,170,188,221,210,133,118][i] }));
export const emails = [
  { sender: 'Avery Stone', subject: 'Attorney notice about GDPR deletion request', category: 'Legal', sentiment: 'Angry', confidence: 99, status: 'Escalated', time: '2m ago' },
  { sender: 'Mina Patel', subject: 'Login still fails after password reset', category: 'Product Issue', sentiment: 'Frustrated', confidence: 94, status: 'Draft Ready', time: '8m ago' },
  { sender: 'Jordan Lee', subject: 'Need invoice for annual subscription', category: 'Billing', sentiment: 'Neutral', confidence: 96, status: 'Auto Replied', time: '14m ago' },
  { sender: 'Sam Rivera', subject: 'Package tracking has not updated', category: 'Delivery Issue', sentiment: 'Sad', confidence: 88, status: 'Draft Ready', time: '22m ago' },
  { sender: 'Priya Shah', subject: 'Love the new analytics view', category: 'Feedback', sentiment: 'Happy', confidence: 97, status: 'Auto Replied', time: '31m ago' },
];
export const escalations = ['Legal / GDPR keyword detected', 'Third angry interaction in 14 days', 'VIP enterprise account', 'AI confidence below 70%', 'Sensitive attachment detected'];
