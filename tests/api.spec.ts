import { test, expect } from '@playwright/test';

test('should get Items', async ({ request }) => {
  // const newIssue = await request.post(`/repos/${USER}/${REPO}/issues`, {
  //   data: {
  //     title: '[Bug] report 1',
  //     body: 'Bug description',
  //   }
  // });
  // expect(newIssue.ok()).toBeTruthy();

  const issues = await request.get(`/api/items`);
  expect(issues.ok()).toBeTruthy();
});