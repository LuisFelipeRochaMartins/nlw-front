export async function createCompletion(goalId: string) {
  await fetch('http://localhost:8080/completions', {
    method: 'POST',
    headers: { 'Content-Type': 'Application/json' },
    body: JSON.stringify({ goalId }),
  })
}
