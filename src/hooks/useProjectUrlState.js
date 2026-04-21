import { useState, useEffect, useCallback } from 'react';
import { myProjects, filterCategories } from '../constants/index.js';

const useProjectUrlState = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProjectId, setSelectedProjectId] = useState(1);

  const getFilteredProjects = useCallback((filter) => {
    if (filter === 'all') return myProjects;
    return myProjects.filter(project => project.categories.includes(filter));
  }, []);

  const parseUrlParams = useCallback(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const filter = urlParams.get('filter');
    const projectId = urlParams.get('project');

    let parsedFilter = 'all';
    let parsedProjectId = 1;

    if (filter && filterCategories.some(cat => cat.id === filter)) {
      parsedFilter = filter;
    }

    if (projectId) {
      const id = parseInt(projectId, 10);
      if (!isNaN(id)) {
        const filteredProjects = getFilteredProjects(parsedFilter);
        const project = filteredProjects.find(p => p.id === id);
        if (project) {
          parsedProjectId = id;
        } else if (filteredProjects.length > 0) {
          parsedProjectId = filteredProjects[0].id;
        }
      }
    } else {
      const filteredProjects = getFilteredProjects(parsedFilter);
      if (filteredProjects.length > 0) {
        parsedProjectId = filteredProjects[0].id;
      }
    }

    return { filter: parsedFilter, projectId: parsedProjectId };
  }, [getFilteredProjects]);

  const updateUrlParams = useCallback((filter, projectId) => {
    const urlParams = new URLSearchParams(window.location.search);

    if (filter === 'all') {
      urlParams.delete('filter');
    } else {
      urlParams.set('filter', filter);
    }

    const filteredProjects = getFilteredProjects(filter);
    if (filteredProjects.length > 0 && filteredProjects[0].id === projectId) {
      urlParams.delete('project');
    } else {
      urlParams.set('project', projectId);
    }

    const newUrl = `${window.location.pathname}${urlParams.toString() ? '?' + urlParams.toString() : ''}`;
    window.history.pushState({ filter, projectId }, '', newUrl);
  }, [getFilteredProjects]);

  useEffect(() => {
    const { filter, projectId } = parseUrlParams();
    setActiveFilter(filter);
    setSelectedProjectId(projectId);

    const handlePopState = (event) => {
      if (event.state) {
        setActiveFilter(event.state.filter || 'all');
        setSelectedProjectId(event.state.projectId || 1);
      } else {
        const { filter, projectId } = parseUrlParams();
        setActiveFilter(filter);
        setSelectedProjectId(projectId);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [parseUrlParams]);

  const setFilter = useCallback((newFilter) => {
    const filteredProjects = getFilteredProjects(newFilter);
    let newProjectId = selectedProjectId;

    if (filteredProjects.length === 0) {
      return;
    }

    const currentProjectExists = filteredProjects.some(p => p.id === selectedProjectId);
    if (!currentProjectExists) {
      newProjectId = filteredProjects[0].id;
    }

    setActiveFilter(newFilter);
    setSelectedProjectId(newProjectId);
    updateUrlParams(newFilter, newProjectId);
  }, [selectedProjectId, getFilteredProjects, updateUrlParams]);

  const setProject = useCallback((newProjectId) => {
    setSelectedProjectId(newProjectId);
    updateUrlParams(activeFilter, newProjectId);
  }, [activeFilter, updateUrlParams]);

  const filteredProjects = getFilteredProjects(activeFilter);
  const selectedProject = myProjects.find(p => p.id === selectedProjectId) || (filteredProjects.length > 0 ? filteredProjects[0] : null);
  const selectedProjectIndex = filteredProjects.findIndex(p => p.id === selectedProjectId);

  return {
    activeFilter,
    selectedProjectId,
    selectedProject,
    selectedProjectIndex,
    filteredProjects,
    setFilter,
    setProject,
  };
};

export default useProjectUrlState;