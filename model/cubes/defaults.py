import os
from cube import context_func

@context_func
def get_scheduled_refresh():
  name = 'CUSTOM_ENV_PREAGGS_ENABLE'
  if name in os.environ:
    return str(str(os.environ[name]).lower() == 'true').lower()
  return 'false'

