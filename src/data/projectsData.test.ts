import test from 'node:test';
import assert from 'node:assert/strict';
import { projectsList, isProjectOngoing } from './projectsData';

test('projects dataset integrity and count', () => {
  assert.equal(projectsList.length, 32, 'Should contain all 32 projects from Part B2');
  
  // Verify projects 1 to 32 serial numbers
  projectsList.forEach((p, idx) => {
    assert.equal(p.sn, idx + 1, `Project SN should match ${idx + 1}`);
  });
});

test('project status calculation based on reference date Oct 2026', () => {
  const oct2026 = new Date('2026-10-15T00:00:00Z');
  
  // Project 1 (ends 2029) should be ongoing
  const p1 = projectsList.find(p => p.sn === 1)!;
  assert.equal(isProjectOngoing(p1, oct2026), true, 'Project 1 should be ongoing in Oct 2026');

  // Project 6 (ended 2025-12-31) should be completed in Oct 2026
  const p6 = projectsList.find(p => p.sn === 6)!;
  assert.equal(isProjectOngoing(p6, oct2026), false, 'Project 6 should be completed in Oct 2026');

  // Project 9 (ended Mar 2026) should be completed
  const p9 = projectsList.find(p => p.sn === 9)!;
  assert.equal(isProjectOngoing(p9, oct2026), false, 'Project 9 should be completed in Oct 2026');

  // Project 7 (ends 2026-12-31) should be ongoing in Oct 2026
  const p7 = projectsList.find(p => p.sn === 7)!;
  assert.equal(isProjectOngoing(p7, oct2026), true, 'Project 7 should be ongoing in Oct 2026');

  // Continuous service project (SN 19) should always be ongoing
  const p19 = projectsList.find(p => p.sn === 19)!;
  assert.equal(isProjectOngoing(p19, oct2026), true, 'Continuous project should always be ongoing');
});
