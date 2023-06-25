export const getTasks = state => state.tasks.items;

export const getStatusFilter = state => state.filters.status;
// ? доповнюємо для роботи з данними з бекенду
export const getIsLoading = state => state.tasks.isLoading;
export const getError = state => state.tasks.error;
