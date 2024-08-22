import type { ProjectData, ProjectDependencies } from '../types/index.js';

export function flagAnomalies(
  projectData: ProjectData,
  projectDependencies: ProjectDependencies,
): void {
  for (const [packageName, packageAnalysis] of projectDependencies) {
    const { dependencies, devDependencies } = projectData.get(packageName)!;

    const missingDependencies = new Set<string>();
    const unusedDependencies = new Set<string>();

    packageAnalysis.dependencies.forEach((dependency) => {
      if (dependency === packageName) {
        return;
      }

      if (dependencies.has(dependency) || devDependencies.has(dependency)) {
        return;
      }

      missingDependencies.add(dependency);
    });

    dependencies.forEach((dependency) => {
      if (packageAnalysis.dependencies.has(dependency)) {
        return;
      }

      unusedDependencies.add(dependency);
    });

    console.log(`--- Results for ${packageName} ---\n`);

    console.log({
      missingDependencies: Array.from(missingDependencies),
      unusedDependencies: Array.from(unusedDependencies),
      unknowns: Array.from(packageAnalysis.unknowns),
    });

    console.log('\n');
  }
}
