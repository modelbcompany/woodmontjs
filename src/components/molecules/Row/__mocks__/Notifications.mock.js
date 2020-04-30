// Mock Data
import {
  ADVErrorNotificationItemsMock,
  CMNotificationItemsMock,
  DueTodayNotificationItemsMock,
  OverdueNotificationItemsMock,
  OverwatchNotificationItemsMock,
  UpdatesNotificationItemsMock
} from '../../List/__mocks__/Notifications.mock'

/**
 * @file Mock data for the @link NotificationsBar component
 * @module components/molecules/Row/mocks/Notifications
 */

export const NotificationsMock = {
  AdvertisingErrors: ADVErrorNotificationItemsMock,
  ClientManager: CMNotificationItemsMock,
  DueToday: DueTodayNotificationItemsMock,
  Overdue: OverdueNotificationItemsMock,
  Overwatch: OverwatchNotificationItemsMock,
  Updates: UpdatesNotificationItemsMock
}

export default NotificationsMock
